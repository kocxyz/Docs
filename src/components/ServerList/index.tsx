import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";

const serversApi = "https://api.kocity.xyz/stats/servers";

interface Server {
  id: number | string;
  status: "online" | string;
  region: "EU" | "NA" | string;
  name: string;
  players: number;
  maxPlayers: number;
}

interface ExtraData {
  [key: string]: {
    longName?: string;
    location?: string;
    link?: string;
    linkText?: string;
  };
}

const extraData: ExtraData = {
  TCNS: {
    location: "Chicago",
    link: "https://discord.gg/FdvGezR3YY",
    linkText: "Discord",
  },
  DummyCorps: {
    location: "Southeast US",
    link: "https://koc.dummycorps.net/",
    linkText: "Website",
  },
  "KO-NA-West": {
    location: "Vancouver",
    link: "https://discord.gg/DEJGhdw9rj",
    linkText: "Discord",
  },
  "Hos-DE-Cntr": {
    location: "Germany",
    link: "https://hosmatic.com",
    linkText: "Website",
  },
  "HOS-SGP": {
    link: "https://hosmatic.com",
    linkText: "Website",
  },
  "KoCityDE": {
    location: "Germany",
  },
  RAVE: {
    location: "Germany",
    link: "https://discord.gg/sX8xh3UH87",
    linkText: "Discord"
  }
};

export const ServerList = () => (
  <section className={styles.section}>
    <h2>Public Servers</h2>
    <p>
      These are the community hosted servers you can access through the
      launcher.
    </p>
    <Widget />
  </section>
);

export const Widget = () => {
  const [serverListResult, refresh] = useServerListResult();
  return (
    <div className={styles.widget}>
      <button
        title="refresh"
        className={styles.refresh}
        disabled={serverListResult.status === "loading"}
        onClick={() => refresh()}
      >
        <svg>
          <use href="/img/refresh.svg#refresh" />
        </svg>
      </button>
      <Table
        sx={{
          tableLayout: "fixed",
        }}
      >
        <TableHead
          sx={{
            backgroundColor: "#1f1f1f",
          }}
        >
          <TableRow>
            <TableCell align="left" sx={{
              width: "2.5rem",
            }}></TableCell>
            <TableCell sx={{
              width: "10rem",
            }}>Region</TableCell>
            <TableCell sx={{
              width: "10rem",
            }}>Name</TableCell>
            <TableCell sx={{
              width: "5rem",
            }}>Players (/ Max)</TableCell>
            <TableCell sx={{
              width: "5rem",
            }}>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            backgroundColor: "#2f2f2f",
          }}
        >
          {serverListResult.status === "ok" ? (
            serverListResult.servers.map((server) => (
              <Server key={server.id} server={server} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className={styles.message}>
                {serverListResult.status === "loading" ? (
                  <>Loading...</>
                ) : serverListResult.status === "error" ? (
                  <>Couldn't load servers.</>
                ) : null}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

const Server = ({ server }: { server: Server }) => {
  const { longName, location, link, linkText } = extraData[server.name] ?? {};
  return (
    <TableRow className={styles.server}>
      <TableCell style={{
          cursor: "default",
          userSelect: "none",
        }}>
        <Tooltip title={server.status}>
          <span>{server.status === "online" ? "🟢" : "🔴"}</span>
        </Tooltip>
      </TableCell>
      <TableCell className={styles.region}>
        {server.region}
        {location && ` (${location})`}
      </TableCell>
      <TableCell className={styles.name}>
        {server.name}
        {longName && ` (${longName})`}
      </TableCell>
      <TableCell className={styles.players}>
        {`${padPlayers(server.players)} / ${padPlayers(server.maxPlayers)}`}
      </TableCell>
      <TableCell className={styles.link}>
        {link ? <a href={link}>{linkText ?? link}</a> : null}
      </TableCell>
    </TableRow>
  );
};

const padPlayers = (players) =>
  String(players).padStart(3, /* figure space */ " ");

/**
 * @returns {[
 *   Promise<
 *     | {status: "loading"}
 *     | {status: "error"}
 *     | {status: "ok", servers: Server[]}
 *   >,
 *   () => void
 *  ]}
 */
const useServerListResult = () => {
  const [result, setResult] = useState<
    | { status: "loading" }
    | { status: "error" }
    | { status: "ok"; servers: any[] }
  >({ status: "loading" });
  useEffect(() => {
    fetchServerList().then(setResult);
  }, []);
  const refresh = () => {
    if (result.status !== "loading") {
      setResult({ status: "loading" });
      fetchServerList().then(setResult);
    }
  };
  return [result, refresh] as const;
};

const fetchServerList = async (): Promise<
  | { status: "loading" }
  | { status: "error" }
  | { status: "ok"; servers: Server[] }
> => {
  try {
    const response = await fetch(serversApi);
    const json = await response.json();
    if (!isServerList(json)) {
      console.error("couldn't parse server list. got: ", json);
      return { status: "error" };
    }
    return { status: "ok", servers: json };
  } catch (e) {
    console.error(e);
    return { status: "error" };
  }
};

const isServerList = (json) => Array.isArray(json) && json.every(isServer);

const isServer = (json) =>
  typeof json === "object" &&
  json !== null &&
  (typeof json["id"] === "string" || typeof json["id"] === "number") &&
  typeof json["status"] === "string" &&
  typeof json["name"] === "string" &&
  typeof json["region"] === "string" &&
  typeof json["maxPlayers"] === "number" &&
  typeof json["players"] === "number";

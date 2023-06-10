import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const serversApi = "https://api.kocity.xyz/stats/servers";

const extraData: {
  [name: string]: {
    longName?: string;
    location?: string;
    link?: string;
    linkText?: string;
  };
} = {
  TCNS: {
    longName: "The City Never Sleeps",
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
  },
};

interface Server {
  id: number | string;
  status: "online" | string;
  name: string;
  region: "EU" | "NA" | string;
  maxplayers: number;
  players: number;
}
type ServerListResult =
  | { status: "loading" }
  | { status: "ok"; servers: Server[] }
  | { status: "error" };

export const ServerList = () => (
  <section className={styles.section}>
    <h2>Public Servers</h2>
    <p>
      These are the community hosted servers you can access through the Launcher
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
        onClick={refresh}
      >
        <svg>
          <use href="/img/refresh.svg#refresh" />
        </svg>
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Status</th>
            <th>Region</th>
            <th>Name</th>
            <th>Players (/ Max)</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {serverListResult.status === "ok" ? (
            serverListResult.servers.map((server: Server) => (
              <Server server={server} />
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.message}>
                {serverListResult.status === "loading" ? (
                  <>Loading...</>
                ) : serverListResult.status === "error" ? (
                  <>Couldn't load servers.</>
                ) : null}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const Server = ({ server }: { server: Server }) => {
  const { longName, location, link, linkText } = extraData[server.name] ?? {};
  return (
    <tr className={styles.server}>
      <td className={styles.status} title={server.status}>
        {server.status === "online" ? "🟢" : "⚠️"}
      </td>
      <td className={styles.region}>
        {server.region}
        {location && ` (${location})`}
      </td>
      <td className={styles.name}>
        {server.name}
        {longName && ` (${longName})`}
      </td>
      <td className={styles.players}>
        {`${padPlayers(server.players)} / ${padPlayers(server.maxplayers)}`}
      </td>
      <td className={styles.link}>
        {link ? <a href={link}>{linkText ?? link}</a> : null}
      </td>
    </tr>
  );
};

const padPlayers = (players: number): string =>
  String(players).padStart(3, /* figure space */ " ");

const useServerListResult = (): [ServerListResult, () => void] => {
  const [result, setResult] = useState<ServerListResult>({ status: "loading" });
  useEffect(() => {
    fetchServerList().then(setResult);
  }, []);
  const refresh = () => {
    if (result.status !== "loading") {
      setResult({ status: "loading" });
      fetchServerList().then(setResult);
    }
  };
  return [result, refresh];
};

const fetchServerList = async (): Promise<ServerListResult> => {
  try {
    const response = await fetch(serversApi);
    const json = (await response.json()) as unknown;
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

const isServerList = (json: unknown): json is Server[] =>
  Array.isArray(json) && json.every(isServer);

const isServer = (json: unknown): json is Server =>
  typeof json === "object" &&
  json !== null &&
  (typeof json["id"] === "string" || typeof json["id"] === "number") &&
  typeof json["status"] === "string" &&
  typeof json["name"] === "string" &&
  typeof json["region"] === "string" &&
  typeof json["maxplayers"] === "number" &&
  typeof json["players"] === "number";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

// const serversApi = "https://api.kocity.xyz/stats/servers";
const serversApi = "/servers.json";

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

export const ServerList = () => {
  const [serverListResult, refresh] = useServerListResult();
  return (
    <section>
      <h2>Public Servers</h2>
      <p>
        These are the community hosted servers you can access through the
        Launcher
      </p>
      <button disabled={serverListResult.status === "loading"}>Refresh</button>
      {serverListResult.status === "loading" ? (
        "Loading..."
      ) : serverListResult.status === "error" ? (
        "Something went wrong."
      ) : (
        <ul>
          {serverListResult.servers.map((server: Server) => (
            <Server server={server} />
          ))}
        </ul>
      )}
    </section>
  );
};

const Server = ({ server }: { server: Server }) => (
  <li className={styles.server}>
    <div title={server.status}>{server.status === "online" ? "🟢" : "⚠️"}</div>
    <div className={styles.region}>{server.region}</div>
    {server.name}
    <div className={styles.players}>
      {`${server.players} / ${server.maxplayers}`}
    </div>
  </li>
);

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
    // should do more validation, but it's easier to assume the shape and check when using it later.
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

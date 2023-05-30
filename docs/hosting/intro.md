---
sidebar_position: 1
---

# Introduction

## Docker

Using docker is probably the easiest version to host a private server. Especially when running Linux.
This section will show you how to host the entire infrastructure using [docker](https://www.docker.com/) and [docker compose](https://docs.docker.com/compose/install/).

### Prequisite

- [docker](https://www.docker.com/) (`any version that supports compose v2`)

### Running the Infrastructure using Docker Compose

To run the private server infrastructure using docker compose you can use the one [here](https://github.com/Tandashi/knockoutcity-server-docker/blob/main/compose.yaml).
This compose file includes all the services needed to host a private server.

Once copied the following should start all neccessary services as well as the private server itself:

```bash
docker compose up -d
```

:::caution

Currently the [`knockout-city-docker`](https://github.com/Tandashi/knockoutcity-server-docker/) image does not include any authentication services by default.

:::

To include the Authenication Proxy into the Infrastructure the `compose.yaml` has to be extended and the services reconfigured.
Firstly we need to include the Authentication Proxy as a service by adding the following under the `services` section:

```yaml
proxy:
  image: ghcr.io/ipmake/kocity-proxy
  container_name: koc-proxy

  environment:
    # Change these
    SERVER_NAME: <YOUR_SERVER_NAME>
    PUBLIC_ADDRESS: <PUBLIC_ADDRESS>
    MAX_PLAYERS: <MAX_PLAYERS>

    # Dont change these
    EXTERNAL_PORT: 23600
    INTERNAL_HOST: server
    INTERNAL_PORT: 23500

  ports:
    - '23600:23600/tcp'

  depends_on:
    - server
```

Next up we need to reconfigure the `server` service slightly:

```yaml
server:
  ...

  environment:
    ...

    KOC_BACKEND_PORT: 23500
    KOC_SERVER_MIN_PORT: 23600
    KOC_SERVER_MAX_PORT: 23699

    ...

  ports:
    - "23600-23699:23600-23699/udp"

  ...
```

### Running a Private Server without Docker Compose

Detailed information about the `knockout-city-docker` image can be found [here](https://github.com/Tandashi/knockoutcity-server-docker/).

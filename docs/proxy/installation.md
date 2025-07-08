---
sidebar_position: 2
---

# Installation

:::note
The launcher will only try to auth with the proxy when the server is registered as a public server. You cannot use the proxy with a private server yet.
:::

## Requirements

- [Node.js](https://nodejs.org/en/) (Latest LTS version)
- [Git](https://git-scm.com/downloads)
- A KoCity server (Guide coming soon)

## Preparing 

Make sure you have nodejs installed correctly by running `node -v` in your terminal. It should return the version of node you have installed. If it does not, please reinstall nodejs.

***

## Downloading the source code

To download the source code, you need to clone the repository. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/Ipmake/KOCity-Proxy
```

This will create a folder called `KOCity-Proxy` in your current directory. You can change the directory by running `cd KOCity-Proxy`.

## Installing dependencies

To install the dependencies, you need to run the following command in your terminal:

```bash
npm install
```

This will install all the dependencies required to run the proxy server.

## Configuring the proxy

The git clone command downloads a file called `config.json` in the root directory of the proxy. This file contains all the configuration options for the proxy. You can change the values in this file to your liking. 

Please note that you have to change the name of the server in the `server` field to the name of your server. 

## Preparing to run the proxy

Before you can run the proxy, you will have to change the `backend port` of the knockout city server to something like `23500` and close that port in your firewall. You can do this by adding the `-backend_port=23500` flag when starting the server. 
**Example:**

```bash
KnockoutCityServer.exe -backend_port=23500
```

## Running the proxy

To run the proxy, you need to run the following command in your terminal:

```bash
npm start
```

This will start the proxy server.

The proxy will be replacing the original port `23600` so make sure you keep that one open and close the other port in your firewall to prevent people from skipping the proxy.

## Updating

To update the proxy, you need to run the following command in your terminal:

```bash
git pull
```

This will update the proxy to the latest version. You will have to restart the proxy after updating.
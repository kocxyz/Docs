---
sidebar_position: 1
---

# Windows

Using windows or Windows Server is the official way to set up a knockout city server for your needs. Here's how to setup and run the server.

## Requirements

- Windows
- [Winrar](https://win-rar.com) or [7Zip](https://7-zip.org) (optional)
- [Nodejs](https://nodejs.org/) LTS (optional)

## Downloading the server

Downloading the server is pretty straightforward. The files for the server are included in all zip files distributed by Velan. But if you just want to run the server, you only have to download the server zip file. 

Head over to the [official page](https://www.knockoutcity.com/private-server-edition#section-download) and select the server zip file. 

Wait for the download to complete and then extract the server zip file either using the built-in unzip tool or whatever you prefer.

## Running the server

There are multiple ways to run the server. You can for one run the server by just double-clicking the `KnockoutCityServer.exe` file. This will launch the server with all the default arguments.

If you want to change the arguments, you can create a shortcut to the `KnockoutCityServer.exe` file and add the arguments to the target field.

You can also run the server from the command line. Open a command prompt in the directory where the server is located and run the following command:

```bash
KnockoutCityServer.exe [arguments]
```

### Arguments

The server supports a few arguments that can be used to change the behavior of the server. Here's a list of all the arguments and what they do.

| Argument | Description | Default |
| -------- | ----------- | ------- |
| `-backend_port` | The port the server should listen on. | `23600` |
| `-server_min_port` | The minimum udp port the game server should listen on. | `23600` |
| `-server_max_port` | The maximum udp port the game server should listen on. | `23699` |
| `-secret` | An optional password that has to be passed to the client as well |  |
| `-backend_db` | Optional PostgreSQL server connection string | Built-in server |
| `-backend_redis_db_host` | Optional hostname of a running Redis server | Built-in server |
| `-backend_redis_db_port` | Optional port of a running Redis server | Built-in server |

#### Example

```bash
KnockoutCityServer.exe -backend_port=23500 -secret=HelloWorld
```
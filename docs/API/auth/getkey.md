---
toc_max_heading_level: 5
---

```
POST /auth/getkey/
```

## Description

This endpoint will generate a temporary authkey or sessionkey for a given user and server. The authkey will be send to the proxy as the username flag provided when starting the KoCity client

The authkey is only valid till its either used once or 10 minutes have passed.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Description |
| -------- | -------- |
| username | The username of the user defined when registering |
| authToken| The personal authtoken stored in the launcher |
| server   | The address defined in the server list and in the config file of the proxy |

### Example

```json
{
    "username": "Users_Username",
    "authToken": "Users_Auth_Token",
    "server": "127.0.0.1:23600"
}
```

## Response

```json
{
    "authkey": "A_Temporary_Auth_Key"
}
```
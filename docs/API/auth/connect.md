---
toc_max_heading_level: 5
---

```
POST /auth/connect
```

## Description

This endpoint is used to connect a user on the authentication server to a velanID identified user on the game server. It is typically used to syncronize the username of the user with the game server and reflect changes like name colors etc.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Type | Description |
| -------- | -------- | -------- |
| authkey  | String   | The temporary authkey or session key that is requested by the launcher |
| server   | String   | The server ip / domain. Has to match with what was provided for the authkey |
| velanID  | Number   | The game server internal velanID of the user |

### Example

```json
{
    "authkey": "A_Temporary_Auth_Key",
    "server": "someserver.com:23600",
    "velanID": 00000000000
}
```

## Response

```json
OK
```
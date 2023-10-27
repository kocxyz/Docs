---
toc_max_heading_level: 5
---

```
POST /auth/validate
```

## Description

This endpoint is used to validate a user's auth token using the auth token itself as well as the user's username. This endpoint is used to check if a user's auth token is still valid, and if it is, it returns the registered username of the user.

This endpoint is especially important for the proxy sind of the koCity server, that authenticates users using their auth token.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Type | Description |
| -------- | -------- | -------- |
| server   | String   | The server ip / domain. Has to match with what was provided for the authkey |
| authkey  | String   | The temporary authkey or session key that is requested by the launcher |
| keepKey  | Boolean?  | hether to keep the key and not invalidate it after authenticating |

### Example

```json
{
    "server": "someserver.com:23600",
    "authkey": "A_Temporary_Auth_Key",
    "keepKey": false
}
```

## Response

```json
{
    "username": "Users_Username",
    "color": "#ff0000",
    "velanID": 00000000000
}
```
OR
```json
{
    "username": "Users_Username",
    "color": null
}
```
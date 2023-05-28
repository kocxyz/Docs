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

| Variable | Description |
| -------- | -------- |
| username | The username of the user |
| authkey  | The temporary authkey or session key that is requested by the launcher |

### Example

```json
{
    "username": "Users_Username",
    "authkey": "A_Temporary_Auth_Key"
}
```

## Response

```json
{
    "username": "Users_Username"
}
```
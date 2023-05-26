---
toc_max_heading_level: 5
---

```
POST /auth/reauth
```

## Description

This endpoint is used to validate a user's auth token using the auth token itself as well as the user's username. This endpoint is used to check if a user's auth token is still valid, and if it is, it returns the registered username of the user.

This endpoint is especially important for the proxy sind of the koCity server, that authenticates users using their auth token.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Description |
| -------- | -------- |
| username | The username of the user |
| authToken | The auth token to validate |

### Example

```json
{
    "username": "Users_Username",
    "authToken": "Users_Auth_Token"
}
```

## Responses

| Code | Situations |
| -------- | -------- |
| [200](#200) | Success, the endpoint will respond with JSON |
| 400  | No auth token was provided / The user does not exist |
| 401  | The auth token provided was invalid |

***

### 200

```json
{
    "username": "Users_Username"
}
```
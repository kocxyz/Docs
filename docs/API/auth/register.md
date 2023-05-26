---
toc_max_heading_level: 5
---

```
POST /auth/register/:code
```

| Variable | Description |
| -------- | -------- |
| :code    | The 6 digit login code that gets generated when authenticating with discord [here](https://api.kocity.xyz/web/discord) |

## Description

This endpoint is used to define a username for a user, using the 6 digit pin to identify the user. The 6 digit pin is generated when authenticating with discord [here](https://api.kocity.xyz/web/discord).

The 6 digit pin is only valid for 3 hours after being generated.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Description |
| -------- | -------- |
| username | The username to set for the user |

### Example

```json
{
    "username": "Users_Username"
}
```

## Responses

| Code | Situations |
| -------- | -------- |
| [200](#200) | Success, the endpoint will respond with JSON |
| 400  | No 6 digit pin was provided / The username was invalid |
| 401  | The 6 digit pin provided was invalid |
| 500  | An internal server error occured |

***

### 200

```json
{
    "username": "Users_Username",
    "authToken": "Users_Auth_Token"
}
```
---
toc_max_heading_level: 5
---

```
GET /auth/login/:code
```

| Variable | Description |
| -------- | -------- |
| :code    | The 6 digit login code that gets generated when authenticating with discord [here](https://api.kocity.xyz/web/discord) |

## Description

This endpoint is used to fetch or generate a token for a user, using a 6 digit pin that is generated when authenticating with discord [here](https://api.kocity.xyz/web/discord).

The 6 digit pin is only valid for 3 hours after being generated. 

## Responses

| Code | Situations |
| -------- | -------- |
| [200](#200) | Success, the endpoint will respond with JSON |
| 400  | No 6 digit pin was provided |
| 401  | The 6 digit pin provided was invalid |
| 500  | An internal server error occured |


***

### 200

#### User is not registered

```json
{
    "new": true
}
```

#### Authentication sucessfull

```json
{
    "username": "Users_Username",
    "authToken": "Users_Auth_Token"
}
```
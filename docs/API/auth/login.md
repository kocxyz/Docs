---
toc_max_heading_level: 5
---

```
POST /auth/login/
```

## Description

This endpoint is used to fetch or generate a token for a user, using a 6 digit pin that is generated when authenticating with discord [here](https://api.kocity.xyz/web/discord).

The 6 digit pin is only valid for 10 minutes after being generated. 

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Description |
| -------- | -------- |
| code     | The 6 digit pin generated when authenticating with discord |

### Example

```json
{
    "code": "669496"
}
```

## Response

```json
{
    "username": "Users_Username",
    "authToken": "Users_Auth_Token"
}
```
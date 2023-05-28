---
toc_max_heading_level: 5
---

```
POST /auth/register/
```

## Description

This endpoint is used to define a username for a user, using the 6 digit pin to identify the user. The 6 digit pin is generated when authenticating with discord [here](https://api.kocity.xyz/web/discord).

The 6 digit pin is only valid for 3 hours after being generated.

## Body

The body of the request should be JSON, and should contain the following:

| Variable | Description |
| -------- | -------- |
| username | The username to set for the user |
| code     | The 6 digit pin generated when authenticating with discord |

### Example

```json
{
    "username": "Users_Username",
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
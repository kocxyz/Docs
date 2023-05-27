---
toc_max_heading_level: 5
---

```
GET /stats/status
```

## Description

This endpoint just redirects the user to the discord authentication page.

After authenticating with discord, the user will be redirected to a sucess page that displays the 6 digit pin that is used to authenticate with the API.

## Responses

| Code | Situations |
| -------- | -------- |
| [200](#200)  | Success, the launcher will provide infos about the server |

***

### 200

```json
{
    "status": "OK",
    "version": "1.0.0",
    "uptime": 123456789,
    "connections": 2,
    "maxConnections": 50
}
```
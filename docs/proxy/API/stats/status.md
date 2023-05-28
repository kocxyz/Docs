---
toc_max_heading_level: 5
---

```
GET /stats/status
```

## Description

This endpoint just redirects the user to the discord authentication page.

After authenticating with discord, the user will be redirected to a sucess page that displays the 6 digit pin that is used to authenticate with the API.

## Response

```json
{
    "status": "OK",
    "version": "1.0.0",
    "uptime": 123456789,
    "connections": 2,
    "maxConnections": 50
}
```
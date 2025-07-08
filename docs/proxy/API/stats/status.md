---
toc_max_heading_level: 5
---

```
GET /stats/status
```

## Description

This is an endpoint for the auth proxy that just returns some basic statistics of the proxy.

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

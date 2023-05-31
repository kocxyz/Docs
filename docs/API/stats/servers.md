---
toc_max_heading_level: 5
---

```
GET /stats/servers
```

## Description

This endpoint will fetch the public server list from the database and return it as a JSON array. 

The server list includes properties like the name and ip of a server. 

## Response

```json
[
    {
        "status": "online",
        "name": "test",
        "ip": "127.0.0.1:23600",
        "region": "EU"
    },
    {
        "status": "online",
        "name": "test1",
        "ip": "192.168.178.2:23600",
        "region": "NA"
    },
]
```

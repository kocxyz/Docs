---
toc_max_heading_level: 5
---

```
GET /stats/user/:id
```

## Variables

| Variable | Description |
|----------|-------------|
| :id | The discord user id of the user |

## Description

This endpoint will fetch the stats of a user from the database and return it as a JSON object. 

The stats include properties like the username, lastlogin and (if they own a server) the list of servers they own.

## Response

```json
{
    "id": "117038051628285961",
    "username": "Gorndt",
    "registeredat": "2023-06-07T01:51:34.742Z",
    "lastlogin": "2023-06-07T01:51:34.742Z",
    "ownedServers": [
        {
            "id": 2000,
            "name": "TCNS",
            "ip": "69.16.246.32:23600",
            "status": "online",
            "players": 1,
            "maxplayers": 250
        }
    ]
}
```

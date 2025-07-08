---
toc_max_heading_level: 5
---

```
GET /stats/user/username/:username
```

## Variables

| Variable | Description                     |
| -------- | ------------------------------- |
| :username| The discord user id of the user |

## Description

This endpoint will fetch the stats of a user from the database and return it as a JSON object.

The stats include properties like the username, lastlogin and (if they own a server) the list of servers they own.

## Response

```json
{
  "user": {
    "id": "117038051628285961",
    "username": "Gorndt",
    "registeredat": "2023-06-06T21:51:34.742Z",
    "lastlogin": "2023-06-10T22:10:34.068Z",
    "premium": 0,
    "playtime": 26
  },
  "ownedServers": [
    {
      "id": 2000,
      "status": "online",
      "name": "TCNS",
      "ip": "69.16.246.32:23600",
      "region": "NA",
      "owner": "117038051628285961",
      "players": 0,
      "maxPlayers": 250
    }
  ]
}       
```

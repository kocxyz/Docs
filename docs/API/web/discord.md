---
toc_max_heading_level: 5
---

```
GET /web/discord
```

## Description

This endpoint just redirects the user to the discord authentication page.

After authenticating with discord, the user will be redirected to a sucess page that displays the 6 digit pin that is used to authenticate with the API.

## Responses

| Code | Situations |
| -------- | -------- |
| 302  | Success, the user will be redirected to the discord authentication page |
---
sidebar_position: 3
---

# Errors

Heres a list of all the errors that can be returned by the API.

## Layout

```json
{
    "type": "some_type",
    "message": "Some message"
}
```

## Types

| Type | Code | Description |
| -------- | -------- | -------- |
| no_code            | 400 | No 6 digit pin wasn't provided |
| invalid_code       | 401 | The 6 digit pin provided was invalid |
| no_account_found   | 400 | The user wasn't found, maybe they need to register first |
| invalid_account    | 400 | The Code provided pointed to a faulty user, try again |
| terminated_account | 403 | The user account was banned by the auth server owner |
| account_exists     | 409 | The user already exists and therefore cannot register |
| username_too_long  | 400 | The provided username was too long |
| username_too_short | 400 | The provided username was too short |
| invalid_username   | 400 | Username may only contain letters, numbers, dashes and underscores |
| username_taken     | 409 | The username is already occupied by another user |
| no_user            | 400 | The targeted user does not exist |
| invalid_token      | 403 | The provided authtoken is invalid |
| invalid_key        | 403 | The provided temporary auth key is invalid or already used |
| invalid_server     | 403 | The provided server does not match the one that the auth key was generated for |
| too_many_requests  | 429 | You have been rate limited for sending to many requests |
| internal_error     | 500 | An internal server error occured, the message will tell you more |
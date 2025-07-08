---
sidebar_position: 1
---

# API Intro

So to start off, welcome to the API documentation for the unofficial Knockout City Build that I have been working on for the last few months. At this point, Knockout City hasn't yet shutdown the public servers and i want to get this done before that happens. 

## What's the point of the API?

So the point of the API is mainly to enpower the launcher that i made as well to support authentication using discord as the primary platform. 

### How does it authenticate?

The API authenticates using an auth token that is generated upon first login. This token is then used to authenticate the user for all future requests. This token is stored in the database and is used to authenticate the user before joining a server.

### Can i use the API for my own projects?

Theoretically yes, but its important for me when building everything that i keep everything up to a certain standard that fits new users and prevents the Knockout City community from splitting up into multiple different communities based on the launcher that they use, and the servers that they can play on.
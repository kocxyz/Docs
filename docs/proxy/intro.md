---
sidebar_position: 1
---

# Introduction

## What is the KoCity Proxy?

The KoCity Proxy is a simple proxy server that adds an aditional layer of authentication to the Knockout City server. It is used to prevent logging in using another username to play with someone elses account. 

## How does it work?

The proxy works by intercepting the login request and checking if the authtoken is valid. If it is, it will forward the request to the Knockout City server. If it is not, it will cancel the request and return an error. 

Tho, the Proxy server does not work by itself. It needs access to the [Auth API](/docs/category/api-docs) to check if the authtoken is valid, and store users in a centralized database. We recommend just using the official [Auth API](/docs/category/api-docs) for this, but you can also use your own, once the source code is released. You will need to change the used auth server in the launcher tho.

## Why should I use it?

By default, the knockout city server does not authenticate. It just asigns users by username and the username is freely defined when starting knockout city. This means that anyone can just use your username and play with your account. 

The proxy server prevents this by checking if the authtoken is valid. This means that only you can play with your account, as long as you are using the [launcher](https://github.com/Ipmake/kocitylauncher).
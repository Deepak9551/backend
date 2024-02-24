// this exres same as import express from express

require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

const githubdata =
// 20240224135310
// https://api.github.com/users/Deepak955

{
  "login": "Deepak955",
  "id": 54711441,
  "node_id": "MDQ6VXNlcjU0NzExNDQx",
  "avatar_url": "https://avatars.githubusercontent.com/u/54711441?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Deepak955",
  "html_url": "https://github.com/Deepak955",
  "followers_url": "https://api.github.com/users/Deepak955/followers",
  "following_url": "https://api.github.com/users/Deepak955/following{/other_user}",
  "gists_url": "https://api.github.com/users/Deepak955/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Deepak955/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Deepak955/subscriptions",
  "organizations_url": "https://api.github.com/users/Deepak955/orgs",
  "repos_url": "https://api.github.com/users/Deepak955/repos",
  "events_url": "https://api.github.com/users/Deepak955/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Deepak955/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-08-30T12:23:01Z",
  "updated_at": "2023-09-09T18:58:04Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/deepak',(req,res)=>{
    res.send('This is Deepak Kumar')
})
app.get('/login',(req,res)=>{
    res.send("<h1>user is login</h1>")
})
app.get('logout',(req,res)=>{
res.send("user logout")
})
app.get('/github',(req,res)=>{
  res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
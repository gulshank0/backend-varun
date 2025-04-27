// require('dotenv').config()

// const express = require('express')
// const app = express()
// const port = 4000
// const githubData = {
//   "login": "varunsingh2027",
//   "id": 193503951,
//   "node_id": "U_kgDOC4iizw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/193503951?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/varunsingh2027",
//   "html_url": "https://github.com/varunsingh2027",
//   "followers_url": "https://api.github.com/users/varunsingh2027/followers",
//   "following_url": "https://api.github.com/users/varunsingh2027/following{/other_user}",
//   "gists_url": "https://api.github.com/users/varunsingh2027/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/varunsingh2027/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/varunsingh2027/subscriptions",
//   "organizations_url": "https://api.github.com/users/varunsingh2027/orgs",
//   "repos_url": "https://api.github.com/users/varunsingh2027/repos",
//   "events_url": "https://api.github.com/users/varunsingh2027/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/varunsingh2027/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Varun Singh",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 7,
//   "public_gists": 0,
//   "followers": 1,
//   "following": 2,
//   "created_at": "2025-01-02T14:04:26Z",
//   "updated_at": "2025-04-03T05:53:52Z"
// }

// app.get('/github', (req, res) => {
//   res.json(githubData)
// })
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/login', (req, res) => {
//     res.send('Hello LOGIN!')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

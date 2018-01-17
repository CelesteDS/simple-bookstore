import * as express from 'express'

const app = express()
const port = 3000 || process.env.port

app.use('view engine', 'pug')

app.use('routes/');

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

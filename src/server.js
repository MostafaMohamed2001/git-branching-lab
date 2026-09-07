import http from 'node:http'
import { handleRequest } from './app.js'

const PORT = process.env.PORT || 9000

const server = http.createServer(handleRequest)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { handleRequest } from '../src/app.js'

function mockResponse() {
  return {
    statusCode: null,
    body: '',
    setHeader() {},
    writeHead(code) {
      this.statusCode = code
    },
    end(body) {
      this.body = body
    }
  }
}

test('GET /health returns ok', () => {
  const req = {
    method: 'GET',
    url: '/health',
    headers: { host: 'localhost' }
  }
  const res = mockResponse()

  handleRequest(req, res)

  assert.equal(res.statusCode, 200)
  assert.deepEqual(JSON.parse(res.body), { status: 'ok' })
})

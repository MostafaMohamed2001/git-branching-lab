export function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)

  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'GET' && url.pathname === '/') {
    res.writeHead(200)
    res.end(JSON.stringify({ service: 'git-branching-lab' }))
    return
  }

  if (req.method === 'GET' && url.pathname === '/health') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }



  if (req.method === 'GET' && url.pathname === '/payment') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }
  res.writeHead(404)
  res.end(JSON.stringify({ error: 'not found' }))
}

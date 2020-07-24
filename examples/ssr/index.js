const React = require('react')
const express = require('express')
const { Loader3 } = require('react-spinner-css')
const ReactDOM = require('react-dom/server')
const app = express()
const port = 3000

app.get('*', (req, res) => {
  const el = React.createElement(Loader3)
  const html = ReactDOM.renderToString(el)
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        ${html}
    </body>
    </html>`)
})

app.listen(port, () => console.log(`http://localhost:${port}`))

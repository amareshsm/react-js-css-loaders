const React = require('react')
const express = require('express')
const { Moon } = require('react-js-css-loaders')
const ReactDOM = require('react-dom/server')
const app = express()
const port = 3000

app.get('*', (req, res) => {
  const el = React.createElement(Moon)
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

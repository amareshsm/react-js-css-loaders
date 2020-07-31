import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const useStyles = makeStyles((theme) => ({
  Icon: {
    fontSize: '2rem',
    color: '#f65959',
    padding: '1px 12px 1px 6px',
  },
  card: {
    maxWidth: 'auto',
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.4rem',
    fontWeight: '550',
  },
  subTitle: {
    fontSize: '0.95rem',
    marginTop: '20px',
  },
  CardAction: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  highlighter: {
    borderRadius: 2,
  },
  link: {
    color: '#f65959',
    height: 34,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    padding: '0px 16px',
    borderRadius: 4,
    border: '1px solid #f65959',
    '&:hover': {
      backgroundColor: '#f65959',
      color: 'white',
    },
  },
  '@media (max-width: 600px) ': {
    title: {
      fontSize: '1.2rem',
    },
  },
}))

const UMD = () => {
  const classes = useStyles()
  const code = `<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/browse/react-js-css-loaders@latest/dist/bundle.umd.js"></script>
<script>
    const { Moon } = window.ReactCSSLoaders;
    const container = document.getElementById('container')
    ReactDOM.render(React.createElement(Moon), container)
</script>`

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          <i className={'fas fa-network-wired ' + classes.Icon}></i>
          <span>Usage - UMD format</span>
        </div>

        <SyntaxHighlighter
          className={classes.highlighter}
          language="html"
          style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      </CardContent>

      <CardActions className={classes.CardAction}>
        <Link className={classes.link} underline="none" href="/umd">
          Read More
        </Link>
      </CardActions>
    </Card>
  )
}

export default UMD

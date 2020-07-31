import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Typography from '@material-ui/core/Typography'

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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.4rem',
    fontWeight: '550',
  },
  subTitle: {
    fontSize: '0.95rem',
    marginTop: '15px',
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
  pos: {
    marginBottom: 12,
  },
}))

const Installation = () => {
  const classes = useStyles()
  const code = `<script src="https://unpkg.com/browse/react-js-css-loaders@latest/dist/bundle.umd.js"></script>`

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          <i className={'fas fa-download ' + classes.Icon}></i>
          <span> Installation</span>
        </div>

        <Typography className={classes.subTitle}>
          Install react-js-css-loaders source files via npm.
        </Typography>
        <SyntaxHighlighter
          className={classes.highlighter}
          language="jsx"
          style={tomorrow}>
          npm install react-js-css-loaders --save
        </SyntaxHighlighter>
        <Typography className={classes.subTitle}>
          or use CDN.
        </Typography>
        <SyntaxHighlighter
          className={classes.highlighter}
          language="html"
          style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      </CardContent>

      <CardActions className={classes.CardAction}>
        <Link
          className={classes.link}
          underline="none"
          href="/installation">
          Read More
        </Link>
      </CardActions>
    </Card>
  )
}

export default Installation

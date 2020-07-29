import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  btns: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  downloadIcon: {
    fontSize: '2rem',
    color: '#3f51b5',
    padding: '2px 10px',
  },
  card: {
    maxWidth: 'auto',
    backgroundColor: '#f5f5f5',
    padding: 6,
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
  pos: {
    marginBottom: 12,
  },
}))

const Installation = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          <i
            className={'fas fa-download ' + classes.downloadIcon}></i>
          <span> Installation</span>
        </div>

        <Typography variant="h6" component="p">
          Install react-js-css-loaders source files via npm.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          color="primary"
          href="#contained-buttons">
          ESM
        </Button>
      </CardActions>
    </Card>
  )
}

export default Installation

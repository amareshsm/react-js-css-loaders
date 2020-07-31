import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  Icon: {
    fontSize: '1.5rem',
    color: '#f65959',
    padding: '1px 12px 1px 6px',
  },
  navbarHeader: {
    fontSize: 17,
    fontWeight: 600,
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
  },
  Link: {
    display: 'flex',
    color: 'black',
  },
}))

export default function NavListItem() {
  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          className={classes.navbarHeader}
          component="div"
          id="nested-list-subheader"></ListSubheader>
      }
      className={classes.root}>
      <Link
        className={classes.Link}
        underline="none"
        href="/installation">
        <ListItem button key="installation">
          <ListItemIcon>
            <i className={'fas fa-download ' + classes.Icon}></i>
          </ListItemIcon>
          <ListItemText primary="Installation" />
        </ListItem>
      </Link>
      <Link className={classes.Link} underline="none" href="/esm">
        <ListItem button>
          <ListItemIcon>
            <i className={'fas fa-cubes ' + classes.Icon}></i>
          </ListItemIcon>
          <ListItemText primary="ESM" />
        </ListItem>
      </Link>
      <Link className={classes.Link} underline="none" href="/cjs">
        <ListItem button>
          <ListItemIcon>
            <i className={'fab fa-js-square ' + classes.Icon}></i>
          </ListItemIcon>
          <ListItemText primary="CJS" />
        </ListItem>
      </Link>
      <Link className={classes.Link} underline="none" href="/umd">
        <ListItem button>
          <ListItemIcon>
            <i className={'fas fa-network-wired ' + classes.Icon}></i>
          </ListItemIcon>
          <ListItemText primary="UMD" />
        </ListItem>
      </Link>
    </List>
  )
}

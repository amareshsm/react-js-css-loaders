import React from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import NavItemList from '../NavigationDrawer/NavItems'
import { Grid } from '@material-ui/core'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#f65959',
    display: 'flex',
    justifyContent: 'center',
    height: 62,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  Icon: {
    fontSize: '2rem',
    color: '#f65959',
    padding: '1px 12px 1px 6px',
  },
  card: {
    backgroundColor: '#fefefe',
    padding: 4,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    margin: '18px 0px',
  },
  subTitle: {
    fontSize: '1.2rem',
    marginTop: '15px',
  },
  subTitle2: {
    fontSize: '1.1rem',
    marginTop: '15px',
  },
  Note: {
    fontSize: '1.05rem',
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
  content: {
    marginTop: 60,
    width: '100%',
    padding: theme.spacing(3),
  },
  gridContainer: {
    boxSizing: 'border-box',
  },
  gridItem: {
    maxWidth: '100%',
  },
}))

const UMD = (props) => {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const code = `<script src="https://unpkg.com/browse/react-js-css-loaders@latest/dist/bundle.umd.js"></script>`
  const Note = `react >= 16.2.0 is peer dependencies and node js version should be >=8.`
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const reactCode = `<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`

  const drawer = (
    <div>
      <NavItemList />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Installation
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Grid
          container
          spacing={0}
          className={classes.gridContainer}
          justify="space-between"
          alignItems="center">
          <Grid
            className={classes.gridItem}
            item
            xs={12}
            md={12}
            sm={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.subTitle}>
                  <b>React js css loaders</b> is available as an
                  <b> npm package </b>
                  and also includes <b>cdn</b> support
                </Typography>
                <Typography className={classes.title}>npm</Typography>
                <Typography className={classes.subTitle2}>
                  To Install react-js-css-loaders source files via
                  npm.
                </Typography>
                <SyntaxHighlighter
                  className={classes.highlighter}
                  language="jsx"
                  style={tomorrow}>
                  npm install react-js-css-loaders --save
                </SyntaxHighlighter>
                <Typography className={classes.subTitle2}>
                  To Install react-js-css-loaders source files via
                  yarn.
                </Typography>
                <SyntaxHighlighter
                  className={classes.highlighter}
                  language="jsx"
                  style={tomorrow}>
                  yarn add react-js-css-loaders
                </SyntaxHighlighter>
                <Typography className={classes.Note}>
                  <b> Note:</b> {Note}
                </Typography>
                <Typography className={classes.title}>CDN</Typography>
                <Typography className={classes.subTitle2}>
                  You can also start using react-js-css-loaders with
                  minimal infra setup - it requires react CDN and our
                  package CDN link
                </Typography>
                <Typography className={classes.subTitle2}>
                  Minified and optimized production versions of React
                  are available at:
                </Typography>
                <SyntaxHighlighter
                  className={classes.highlighter}
                  language="html"
                  style={tomorrow}>
                  {reactCode}
                </SyntaxHighlighter>
                <Typography classes={classes.subTitle2}>
                  To load a specific version of react and react-dom,
                  replace 16 with the version number.
                </Typography>

                <Typography className={classes.subTitle2}>
                  our package CDN link :
                </Typography>

                <SyntaxHighlighter
                  className={classes.highlighter}
                  language="html"
                  style={tomorrow}>
                  {code}
                </SyntaxHighlighter>

                <Typography>
                  <b> Note:</b> Affects performance and bandwidth
                  utilization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
UMD.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default UMD

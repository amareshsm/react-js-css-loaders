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
import { Grid, Divider } from '@material-ui/core'
import {
  Moon,
  Revolver,
  Chaser,
  Rhythm,
  Elipsis,
  Throbber,
  Revolution,
  Square,
  Cardfliping,
  Dewdrops,
  Spinner,
  Easeinout,
  Whirl,
} from 'react-js-css-loaders'
import {
  MoonLoader,
  ChaserLoader,
  RevolverLoader,
  RhythmLoader,
  ElipsisLoader,
  ThrobberLoader,
  RevolutionLoader,
  SquareLoader,
  CardflipingLoader,
  DewdropsLoader,
  SpinnerLoader,
  EaseinoutLoader,
  WhirlLoader,
} from './LoadersCode'
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
    borderRadius: 4,
    width: '50%',
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
  loaderSection: {
    display: 'flex',
  },
  Loader: {
    display: 'flex',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  '@media (max-width: 600px) ': {
    loaderSection: {
      flexDirection: 'column',
    },
    Loader: {
      width: '100%',
      height: 230,
    },
    highlighter: {
      width: '100%',
    },
    content: {
      padding: theme.spacing(2),
    },
  },
  '@media (min-width: 601px) and (max-width: 768px)': {
    loaderSection: {
      flexDirection: 'column',
    },
    Loader: {
      width: '100%',
      height: 250,
    },
    highlighter: {
      width: '100%',
    },
  },
}))

const CJS = (props) => {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

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
            CJS
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
                  1. <b>Moon</b>
                </Typography>

                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {MoonLoader}
                  </SyntaxHighlighter>
                  <div
                    className={classes.Loader}
                    style={{ paddingRight: '15px' }}>
                    <Moon />
                  </div>
                </div>
                <br />
                <Divider />
                <Typography className={classes.subTitle}>
                  2. <b>Revolver</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {RevolverLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Revolver />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  3. <b>Chaser</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {ChaserLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Chaser />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  4. <b>Rhythm</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {RhythmLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Rhythm />
                  </div>
                </div>
                <br />
                <Divider />

                <Typography className={classes.subTitle}>
                  5. <b>Elipsis</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {ElipsisLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Elipsis />
                  </div>
                </div>

                <br />
                <Typography className={classes.subTitle}>
                  6. <b>Throbber</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {ThrobberLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Throbber />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  7. <b>Revolution</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {RevolutionLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Revolution />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  8. <b>Square</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {SquareLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Square />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  9. <b>Cardfliping</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {CardflipingLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Cardfliping />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  10. <b>Dewdrops</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {DewdropsLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Dewdrops />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  11. <b>Spinner</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {SpinnerLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Spinner />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  12. <b>Ease in out</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {EaseinoutLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Easeinout />
                  </div>
                </div>
                <br />

                <Divider />
                <Typography className={classes.subTitle}>
                  13. <b>Whirl</b>
                </Typography>
                <div className={classes.loaderSection}>
                  <SyntaxHighlighter
                    className={classes.highlighter}
                    language="jsx"
                    style={tomorrow}>
                    {WhirlLoader}
                  </SyntaxHighlighter>
                  <div className={classes.Loader}>
                    <Whirl />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
CJS.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default CJS

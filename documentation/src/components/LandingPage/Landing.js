import React from 'react'
import { Grid } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import Installation from './installation'
import CJS from './cjs'
import ESM from './esm'
import UMD from './umd'
import useStyles from '../../styles/Landing'

function Landing() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <i
          className={'fab fa-css3 ' + classes.cssFontIcon}
          aria-hidden="true"></i>
        <div className={classes.titleText}>
          <h1 className={classes.titleTextBig}>CSS LOADERS</h1>
          <h3 className={classes.titileTextSmall}>
            Simple loaders using css
          </h3>
        </div>
      </div>
      <div className={classes.packageIconDiv}>
        <Link
          className={classes.black}
          href="https://github.com/amareshsm/react-js-css-loaders">
          <GitHubIcon
            className={classes.packageIconGithub}></GitHubIcon>
        </Link>
        <Link href="https://www.npmjs.com/package/react-js-css-loaders">
          <i className={'fab fa-npm ' + classes.packageIconNpm}></i>
        </Link>
      </div>
      <Grid
        container
        spacing={0}
        className={classes.gridContainer}
        justify="space-between"
        alignItems="center">
        <Grid className={classes.gridItem} item xs={12} md={6} sm={6}>
          <Installation />
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} sm={6}>
          <ESM />
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} sm={6}>
          <CJS />
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} sm={6}>
          <UMD />
        </Grid>
      </Grid>
    </div>
  )
}

export default Landing

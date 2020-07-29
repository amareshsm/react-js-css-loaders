import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    padding: '6rem 6rem 3.5rem 6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cssFontIcon: {
    color: '#3f51b5',
    fontSize: '7.8rem',
    margin: '3rem',
  },
  titleText: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleTextBig: {
    color: '#3f51b5',
    marginBottom: 0,
    fontSize: '4.5rem',
  },
  titileTextSmall: {
    fontSize: '2.5rem',
    marginTop: 0,
  },
  packageIconDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  packageIconGithub: {
    fontSize: '3rem',
    margin: '5px 10px',
  },
  packageIconNpm: {
    fontSize: '3rem',
    margin: '5px 10px',
    color: 'red',
  },
  black: {
    color: 'black',
  },
  gridContainer: {
    marginTop: 25,
    boxSizing: 'border-box',
    padding: 15,
  },
  gridItem: {
    padding: 10,
  },
}))

export default useStyles

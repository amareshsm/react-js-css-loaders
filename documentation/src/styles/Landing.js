import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    padding: '6rem 6rem 3.5rem 6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cssFontIcon: {
    color: '#f65959',
    fontSize: '7.8rem',
    margin: '3rem',
  },
  titleText: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleTextBig: {
    color: '#f65959',
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
  '@media (max-width: 600px) ': {
    title: {
      padding: '2rem 0.5rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cssFontIcon: {
      color: '#f65959',
      fontSize: '4.3rem',
      margin: '1rem',
    },
    titleText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    titleTextBig: {
      color: '#f65959',
      marginBottom: 0,
      fontSize: '2.2rem',
    },
    titileTextSmall: {
      fontSize: '1.1rem',
      marginTop: 5,
      textAlign: 'center',
    },
    packageIconDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    packageIconGithub: {
      fontSize: '2.3rem',
      margin: '3px 10px',
    },
    packageIconNpm: {
      fontSize: '2.3rem',
      margin: '2.5px 10px',
      color: 'red',
    },
  },
  '@media (min-width: 601px) and (max-width: 768px)': {
    title: {
      padding: '2rem 0.5rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cssFontIcon: {
      color: '#f65959',
      fontSize: '4.8rem',
      margin: '1rem',
    },
    titleText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    titleTextBig: {
      color: '#f65959',
      marginBottom: 0,
      fontSize: '2.8rem',
    },
    titileTextSmall: {
      fontSize: '1.7rem',
      marginTop: 5,
      textAlign: 'center',
    },
    packageIconDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    packageIconGithub: {
      fontSize: '2.6rem',
      margin: '2.5px 10px',
    },
    packageIconNpm: {
      fontSize: '2.6rem',
      margin: '3px 10px',
      color: 'red',
    },
  },
  '@media  (min-width: 769px) and (max-width: 992px)': {
    title: {
      padding: '2rem 0.5rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cssFontIcon: {
      color: '#f65959',
      fontSize: '4.8rem',
      margin: '1rem',
    },
    titleText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    titleTextBig: {
      color: '#f65959',
      marginBottom: 0,
      fontSize: '2.8rem',
    },
    titileTextSmall: {
      fontSize: '1.7rem',
      marginTop: 5,
      textAlign: 'center',
    },
    packageIconDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    packageIconGithub: {
      fontSize: '2.6rem',
      margin: '2.5px 10px',
    },
    packageIconNpm: {
      fontSize: '2.6rem',
      margin: '2.5px 10px',
      color: 'red',
    },
  },
  '@media (min-width: 992px) and @media (max-width: 1200px)': {},
}))

export default useStyles

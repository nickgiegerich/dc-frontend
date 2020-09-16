import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import PersistentDrawerRight from './Nav-Secondary';
import Strategy from './Strategy';
import Footer from './Footer';


import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    myPaper: { 
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      padding: theme.spacing(2),
    },
    title: { 
      textAlign: 'cemter',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      padding: theme.spacing(2),
    },
    main: {
      paddingTop: '40px',
      height: '10px !important',
      backgroundColor: 'transparent !important',
    },
  }));

  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: '1.9rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  };


function StrategyPage() {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        {/* Navigation */}
        <div>
          <PersistentDrawerRight/>
        </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <Typography variant="h3">Premiere of Strategy</Typography>
                <hr/>
              </div>
              <div className="col">
                <Strategy/>
              </div>
            </div>
          </div>

    </div>

    );
}

export default StrategyPage;
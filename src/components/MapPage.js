import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import MyMapComponent from './Map';
import PersistentDrawerRight from './Nav-Secondary';
import { SRLWrapper } from 'simple-react-lightbox';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardRoot: { 
      maxWidth: 345,
      boxShadow: '0 1.5rem 3rem rgba(0, 0, 0, 0.75) !important',
    },
    media: {
      height: 140,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    myPaper: { 
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      textAlign: 'center',
      padding: theme.spacing(2),
    },
    title: { 
      textAlign: 'cemter',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      padding: theme.spacing(2),
    },
    mainImage: {
      flexGrow: 1,
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

function MapPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <PersistentDrawerRight/>
            </div>

        
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Typography variant="h3">Developmental Maps</Typography>
                  <hr/>
                </div>

                <div className="col-12 map-padding map-wrapper">
                  
                  <MyMapComponent isMarkerShown={true} className=""/>
                
              </div>
                
                
                <div className="col-12 map-padding" style={{paddingTop: '25px'}}>
                  <img src='./maps/map-1.jpg' alt="Map One" className="idea-images-one-two  my-shadow"/>   
                </div>
                <div className="col-12 map-padding" style={{paddingTop: '25px'}}>
                  <img src='./maps/map-2.jpg' alt="Map Two" className="idea-images-one-two  my-shadow"/>  
                </div>
                <div className="col-12 map-padding" style={{paddingTop: '25px'}}>
                  <img src='./maps/map-3.jpg' alt="Map Three" className="idea-images-one-two my-shadow"/>   
                </div>
                <div className="col-12 map-padding" style={{paddingTop: '25px', paddingBottom: '65px'}}>
                  <img src='./maps/map-4.jpg' alt="Map Four" className="idea-images-one-two  my-shadow"/>   
                </div>
                
              </div>
            </div>
        </div>
    );
}

export default MapPage;
import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
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

const GalleryPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <PersistentDrawerRight/>
            </div>

            <div>
                <Grid>
                    <Paper className={classes.title}> 
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3">Aerial Photos</Typography>
                    </ThemeProvider>
                    <Divider className="page-divider" />
                    </Paper>
              </Grid>
            </div>
            
      <SRLWrapper>
        <div id="content-page-one" className="container content">
          <div className="row">
            <div className="col-md-6 col-12 col-image-half">
              <img src='./gallery/gallery1.jpeg' alt="Devils Corral from above - 1" className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-half">
              <img src='./gallery/gallery2.jpeg' alt="Devils Corral from above - 2" className="my-shadow" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src='./gallery/gallery3.jpeg' alt="Devils Corral from above - 3" className="my-shadow" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src='./gallery/gallery4.jpeg' alt="Devils Corral from above - 4" className="my-shadow" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src='./gallery/gallery5.jpeg' alt="Devils Corral from above - 5" className="my-shadow" />
            </div>
          </div>
        </div>
      </SRLWrapper>
        </div>
    );
}

export default GalleryPage;
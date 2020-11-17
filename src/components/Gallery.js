import React from 'react';
import '../App.css';
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
                        <Typography variant="h3">Gallery</Typography>
                    </ThemeProvider>
                    <Divider className="page-divider" />
                    </Paper>
              </Grid>
            </div>
            
      <SRLWrapper>
        <div id="content-page-one" className="container content">
          <div className="row">
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-one.jpg' alt="Daydreaming while immersed in the tranquility of Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-two.jpg' alt="Peaceful nights hanging out at Devils Corral Pond." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-three.jpg' alt="The golden glow of the Snake River Canyon at Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-four.jpg' alt="On top of the world at Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-five.jpg' alt="Finding peace and tranquility while exploring Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-six.jpg' alt="Endless views at Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-seven.jpg' alt="Get lost in nature while finding yourself at Devils Corral." className="my-shadow" />
            </div>
            <div className="col-md-6 col-12 col-image-large">
              <img src='./gallery/gallery-eight.jpg' alt="Uncover wonder at Devils Corral." className="my-shadow" />
            </div>
          </div>
        </div>
      </SRLWrapper>
        </div>
    );
}

export default GalleryPage;
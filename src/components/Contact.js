import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import PersistentDrawerRight from './Nav-Secondary';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CardActionArea, CardContent, CardActions } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardRoot: { 
      maxWidth: '100%',
      backgroundColor: 'white !important',
      paddingTop: '10px',
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

function Contact() {

    const classes = useStyles();

    return (
<div className={classes.root}>
        {/* Navigation */}
        <div>
          <PersistentDrawerRight/>
        </div>
        {/* END */}
        {/* Header */}
        <div className="container"> 
          <div className="row"> 
            <div className="col-12">
              <Typography variant="h3">Contact Info</Typography>
              <hr/>
            </div>
            <div className="col-12 center-contact-card">
              <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/george.jpg' alt="Map/Image One" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              George N. Panagiotou
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                President | Founder                                
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                                <a className="email-links" href="mailto: gp22@earthlink.net?subject = Contact George - Devils Corral">gp22@earthlink.net</a>
                            </Button>
                        </CardActions>
                </Card>
            </div>
            <div className="xs-col-12 sm-col-12 col-md-4" style={{paddingTop: '25px'}}>
              <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/nickCont.jpg' alt="Map/Image One" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Nick Giegerich
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Website                               
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                                <a className="email-links" href="mailto: ngiegerich@gmail.com?subject = Contact Nick - Devils Corral">ngiegerich@gmail.com</a>
                            </Button>
                        </CardActions>
                </Card>
            </div>
            <div className="xs-col-12 sm-col-12 col-md-4" style={{paddingTop: '25px'}}>
              <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/seanCont.jpg' alt="Map/Image One" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Sean Muldoon
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Content                               
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                                <a className="email-links" href="mailto: seanmuldoon@foreverwild.media?subject = Contact Sean - Devils Corral">seanmuldoon@foreverwild.media</a>
                            </Button>
                        </CardActions>
                </Card>
            </div>
            <div className="xs-col-12 sm-col-12 col-md-4" style={{paddingTop: '25px', paddingBottom: '65px'}}>
              <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/shawnCont.jpg' alt="Map/Image One" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Shawn Wilsey
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Geology                               
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                                <a className="email-links" href="mailto: swillsey@csi.edu?subject = Contact Shawn - Devils Corral">swillsey@csi.edu</a>
                            </Button>
                        </CardActions>
              </Card>
            </div>
          </div>
        </div>
</div>
    );
}

export default Contact;
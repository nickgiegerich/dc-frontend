import React from 'react';
import '../App.css';
import PersistentDrawerRight from './Nav-Secondary';
import { SRLWrapper } from 'simple-react-lightbox';
import LazyLoad from 'react-lazyload';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, CardContent } from '@material-ui/core';

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


function Ideas() {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        {/* NAVIGATIO COMPONENT */}
        <div>
          <PersistentDrawerRight/>
        </div>

        {/* CONTENT */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Typography variant="h3">Developmental Ideas</Typography>
                <hr/>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <SRLWrapper>
                  <LazyLoad height={200}>

                      <img src='./images/ideasImageOne.jpg' alt="card1" className="idea-images-one-two my-shadow"/>   

                  </LazyLoad>
                </SRLWrapper>
              </div>
              <div className="xs-col-12 sm-col-12 col-md-6" style={{paddingTop: '25px'}}>
                <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/card1.jpg' alt="Map One" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent style={{paddingTop: '48px'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                              The Plan
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              On the rim will be a small development with about 10-20 condominiums and about 20 Tiny-Homes for sale or rent to the employees or to local retirees that do not need their large home anymore and favor to spend the winters in Nevada, Arizona, or S. Utah, as many do!
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                    </Card>
              </div>
              <div className="xs-col-12 sm-col-12 col-md-6" style={{paddingTop: '25px'}}>
                <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/card2.jpg' alt="card2" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent style={{paddingTop: '48px'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                            Eco-Friendly
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              The new trend in housing is away from the large “McMansion”. Many people are questioning the need to build a large home which is becoming increasingly more expensive to build and is not efficient to heat and cool. Larger homes are also much more expensive to maintain and worst of all are difficult to afford with their high mortgage payments and property tax bills.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                  </Card>
              </div>
              <div className="xs-col-12 sm-col-12 col-md-6" style={{paddingTop: '25px'}}>
                  <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/card3.jpg' alt="card3" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent style={{paddingTop: '100px'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                            Quality Over Quantity
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            There are many advantages to invest in quality over quantity of living space by building a smaller home of high quality materials and conveniences. Besides being more affordable they are much more energy efficient and a cinch to maintain. Comfort does not have to be sacrificed with a smaller well designed space.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                    </Card>
              </div>
              <div className="xs-col-12 sm-col-12 col-md-6" style={{paddingTop: '25px'}}>
                  <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardMedia className={classes.media}>
                          <img src='./images/card4.jpg' alt="card4" className="center-image"/>
                          </CardMedia>
                          
                          <CardContent style={{paddingTop: '100px'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                            Retiring Smart
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            The tiny house trend is not just for young people or first-time home owners. Many people nearing retirement age are exploring the benefits of living in smaller spaces. Four main reasons retirees move to smaller homes: wanted cash from selling previous home; now have fewer family members in the home; much less time and cost to maintain home; the biggest reason though is reduced monthly costs.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                    </Card>
              </div>
              <SRLWrapper>
              <div className="col-12" style={{paddingTop: '25px', paddingBottom: '65px'}}>
                <img src='./images/lastImage.jpg' alt="map overview" className="idea-images-one-two  my-shadow"/>  
              </div>
              </SRLWrapper>
            </div>
          </div>
    </div>

    );
}

export default Ideas;
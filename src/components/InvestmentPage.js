import React from 'react';
import '../App.css';
import PersistentDrawerRight from './Nav-Secondary';
import Investment from './Investment';
import { SRLWrapper } from 'simple-react-lightbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
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
      backgroundColor: 'black',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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


function InvestmentPage() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
      <div className={classes.root}>
        {/* Navigation */}
        <div>
          <PersistentDrawerRight/>
        </div>

        <div className="container" style={{paddingBottom: '65px'}}>
            <div className="row">
              <div className="col-12">
                <Typography variant="h3">Investment</Typography>
                <hr/>
              </div>
              <div className="col-12">
                <Investment/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{paddingTop: '25px'}}>
                <Card className={classes.cardRoot}>
                        <CardActionArea>
                          <CardContent >
                            <Typography gutterBottom variant="h4" component="h2">
                            Why Devils Corral
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                              Devils Corral is located on the Snake River just north of Twin Falls, Idaho. It is
                              located one mile from Shoshone Falls and one mile from Twin Falls Dam. It is
                              truly a place like no other! The untouched land serves as a secluded destination
                              for curious adventurers. Exploring the depths of Devil’s Corral will showcase blue
                              water, gorgeous canyon walls and views of the Snake River. Idaho’s wide open
                              spaces carry to this corner of the canyon and we are sure you will enjoy the
                              tranquility, privacy and peacefulness of Devils Corral as much as we do.
                              </Typography>
                          </CardContent>
                        </CardActionArea>
                  </Card>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{paddingTop: '25px', paddingBottom: '65px'}}>
              <Card className={classes.cardRoot}>
                        <CardActionArea>  
                          <CardContent >       
                              <Typography gutterBottom variant="h4" component="h2">
                              Geology
                              </Typography>
                              <Typography>
                              The unique landscape and stark natural beauty of Devils Corral are largely the handiwork of a singular, but impactful event, the Bonneville Flood. 
                              This catastrophic deluge occurred about 17,400 years ago when ancient Lake Bonneville, a large freshwater lake covering much of northern Utah and adjoining areas, 
                              overflowed one of its natural divides, releasing a torrent of water northward into the Snake River drainage... <br/>
                              
                              </Typography>
                                <CardActions className="d-flex justify-content-center">
                                  
                                  <Button size="large" color="primary" onClick={handleOpen('paper')}>
                                      read all...
                                  </Button>
                                  
                                </CardActions>
                          </CardContent>
                        </CardActionArea>
                  </Card>
              </div> 
              <div className="col-xs-12 col-sm-12 col-md-6" style={{paddingTop: '25px', paddingBottom: '65px'}}>
              <Card className={classes.cardRoot}>
                        <CardActionArea>  
                          <CardContent >       
                              <Typography gutterBottom variant="h4" component="h2">
                              The Time is Now
                              </Typography>
                              <Typography>
                              Idaho has seen an incredible amount of growth over the last few years and has a strong state economy. 
                              It is a top destination for young professionals, and has a much lower cost of living compared to west coast cities. 
                              Crime is low, nature is close, and opportunity is endless.<br/>
                              {/* <span><hr/></span> */}
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2">
                              contact now:
                              </Typography>
                            <CardActions className="d-flex justify-content-center">
                              <Button size="large" color="primary" href="mailto: gp22@earthlink.net?subject = Contact George - Devils Corral">
                                  gp22@earthlink.net
                              </Button>
                            </CardActions>
                          </CardContent>
                        </CardActionArea>
                  </Card>
              </div> 
              <div className="col-xs-12 col-sm-12 col-md-6" style={{paddingTop: '25px', paddingBottom: '65px'}}>
                <SRLWrapper>
                  <img src='./images/parcelcopy.jpg' alt="Land Parcels" className="idea-images-one-two  my-shadow"/>  
                </SRLWrapper>
              </div>
            </div>
          </div>
          <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    scroll='paper'
                                    aria-labelledby="scroll-dialog-title"
                                    aria-describedby="scroll-dialog-description"
                                    
                                  >
                                    <DialogTitle id="scroll-dialog-title" style={{color: 'white', backgroundColor: '#4d4d4d'}}>Geology</DialogTitle>
                                    <DialogContent dividers={scroll === 'paper'} style={{backgroundColor: '#4d4d4d'}} >
                                      <DialogContentText
                                        id="scroll-dialog-description"
                                        ref={descriptionElementRef}
                                        tabIndex={-1}
                                      >
                                        <div style={{color: 'white'}}>
                                          <p>
                                          The unique landscape and stark natural beauty of Devils Corral are largely the 
                                          handiwork of a singular, but impactful event, the Bonneville Flood. This catastrophic deluge 
                                          occurred about 17,400 years ago when ancient Lake Bonneville, a large freshwater lake 
                                          covering much of northern Utah and adjoining areas, overflowed one of its natural divides, 
                                          releasing a torrent of water northward into the Snake River drainage. 
                                          </p>
                                          <p>
                                          Devils Corral lies where two branches of the Bonneville Flood merged, focusing the 
                                          flood’s power into strong hydraulics and cataracts that ripped sections of the underlying volcanic 
                                          rock. The sheer force of the floodwaters dramatically changed the Snake River region, 
                                          significantly deepening and widening the Snake River canyon as it created and sculpted the 
                                          scenic terraces, alcoves, and cliffs found within Devils Corral. 
                                          </p>
                                          <p>
                                          The impressive and varied landscape left from the Bonneville Flood present a plethora of 
                                          recreational opportunities today. Possible activities on the property include: 
                                          </p>
                                          <ul>
                                            <li>Hiking through the heart of Devils Coral to the mighty Snake River.</li>
                                            <li>Rock climbing the seemingly endless array of cliff faces and canyon walls.</li>
                                            <li>Fishing along the Snake River or the spring-fed streams.</li>
                                            <li>Viewing the exceptional wildlife that inhabits this unique landscape.</li>
                                            <li>Camping within the canyons and enjoying the starry night skies.</li>
                                            <li>Take a swim in the refreshing Devil's Corral Springs.</li>
                                          </ul>
                                        </div>
                                       
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions style={{backgroundColor: 'black'}}>
                                      <Button onClick={handleClose} color="primary">
                                        Close
                                      </Button>
                                    </DialogActions>
                                  </Dialog>

    </div>

    );
}

export default InvestmentPage;
import React from 'react';
import '../App.css';
import NavLinkMui from '../NavLinkMui';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';


import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'black',
    top: 0,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      background: 'black',
    },
  },
  appBar: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      marginLeft: drawerWidth,
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    maxWidth: 220,
  },
}));

function Nav(props) {

    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openDev, setOpenDev] = React.useState(false);
    const [openVid, setOpenVid] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const handleDevClick = () => { 
      setOpenDev(!openDev);
    }

    const handleVidClick = () => { 
      setOpenVid(!openVid);
    }

    const drawer = (
        <div>
          <div className={classes.toolbar} />
          <img src='./logos/devils_logo_sm.png' alt="logo" className={classes.logo} />
          
            <Divider />
            
            <List className="nav-text">

              <ListItem className="nav-text" button component={NavLinkMui} to='/'>
                <ListItemText primary="HOME"/>
              </ListItem>

              <ListItem button onClick={handleDevClick}>
                <ListItemText primary="DEVELOPMENT"/>
                {openDev ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openDev} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItem button component={NavLinkMui} to='/book'>
                      <ListItemIcon className="nav-text" >
                        <MenuBookIcon className="nav-text" />
                      </ListItemIcon>
                      <ListItemText className="nav-text" primary="Strategy" />
                    </ListItem>

                    <ListItem className="nav-text" button component={NavLinkMui} to='/ideas'>
                      <ListItemIcon className="nav-text" >
                        <WbIncandescentIcon className="nav-text"/>
                      </ListItemIcon>
                      <ListItemText className="nav-text" primary="Ideas" />
                    </ListItem>

                    <ListItem button component={NavLinkMui} to='/maps'>
                      <ListItemIcon className="nav-text" >
                        <ExploreIcon className="nav-text"  />
                      </ListItemIcon>
                      <ListItemText className="nav-text" primary="Maps" />
                    </ListItem>

                </List>
              </Collapse>

              <ListItem button onClick={handleVidClick}>
                <ListItemText primary="VIDEOS"/>
                {openVid ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openVid} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <ListItem button component={NavLinkMui} to='/strategy'>
                      <ListItemIcon className="nav-text" >
                        <MovieFilterIcon className="nav-text" />
                      </ListItemIcon>
                      <ListItemText className="nav-text" primary="Premiere of strategy" />
                    </ListItem>

                    <ListItem button component={NavLinkMui} to='/voyage'>
                      <ListItemIcon className="nav-text" >
                        <ArtTrackIcon className="nav-text" />
                      </ListItemIcon>
                      <ListItemText className="nav-text" primary="The voyage" />
                    </ListItem>

                </List>
              </Collapse>

              <ListItem className="nav-text" button component={NavLinkMui} to='/investment'>
                <ListItemText primary="INVESTMENT OPPORTUNITIES"/>
              </ListItem>

              <ListItem className="nav-text" button component={NavLinkMui} to='/gallery'>
                <ListItemText primary="NEWS-PRESS"/>
              </ListItem>

              <ListItem className="nav-text" button component={NavLinkMui} to='/contact'>
                <ListItemText primary="CONTACT"/>
              </ListItem>

            </List>
            
            <Divider />
        </div>
      );
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" 
                    className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuOpenRoundedIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                        className="MuiDrawer-paperAnchorLeft MuiPaper-root"
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                </nav>
        </div>
    );
}

export default Nav;
import React, { useState } from 'react';
import '../App.css';
import PersistentDrawerRight from './Nav-Secondary';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Page } from 'react-pdf';
import pdf from '../pdf/booklet.pdf';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardRoot: { 
      maxWidth: 345,
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

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

function Book() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // const setNumPages = useState(null);
    // const pageNumber = useState(1);
    const classes = useStyles();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

      let width = window.innerWidth;

if(width > 768) { 
    return (
        <div className={classes.root}>
            <div>
                <PersistentDrawerRight/>
            </div>

            <div className="container" stlye={{paddingBottom: '65px'}}>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h3">Developmental Strategy</Typography>
                        <p>Click on the image below to download the booklet</p>
                        <hr/>
                    </div>
                    <div className="col-12" stlye={{paddingBottom: '65px'}}>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <Document
                                file='./pdf/booklet.pdf'
                                onLoadSuccess={onDocumentLoadSuccess}
                                options={options}
                            >
                                {/* {
                                    Array.from(
                                        new Array(numPages),
                                        (el, index) => (
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                            />
                                        )
                                    )
                                } */}
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    );
} else {
    return (
        <div className={classes.root}>
            <div>
                <PersistentDrawerRight/>
            </div>

            <div className="container" stlye={{paddingBottom: '65px'}}>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h3">Developmental Strategy</Typography>
                        <p>Click on the image below to download the booklet</p>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <Document
                                file='./pdf/booklet.pdf'
                                onLoadSuccess={onDocumentLoadSuccess}
                                options={options}
                            >
                                <Page pageNumber={1} />
                            </Document>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Book;
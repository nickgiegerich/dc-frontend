import React from 'react';
import './App.css';
import Home from './components/Home';
import Ideas from './components/Ideas';
import StrategyPage from './components/StrategyPage';
import VoyagePage from './components/VoyagePage';
import GalleryPage from './components/Gallery'
import Contact from './components/Contact';
import MapPage from './components/MapPage';
import InvestmentPage from './components/InvestmentPage';
import Book from './components/Book';
import Footer from './components/Footer';
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


function App() {
return (
<div className="page-container">
    <SimpleReactLightbox>
        
            <div className="content-wrap">
            <Router>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade">
                                
                            <Switch location={location}>
                                <Route path="/" exact component={props => <Home/>}/>
                                <Route path="/ideas" component={Ideas}/>
                                <Route path="/maps" component={MapPage}/>
                                <Route path="/book" component={Book}/>
                                <Route path="/strategy" component={StrategyPage}/>
                                <Route path="/voyage" component={VoyagePage}/>
                                <Route path="/investment" component={InvestmentPage}/> 
                                <Route path="/gallery" component={GalleryPage}/>
                                <Route path="/contact" component={Contact}/> 
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
                </Router>
            </div>
    </SimpleReactLightbox>            
    <Footer/>
</div>


  );
}
export default App;

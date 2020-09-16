import React, {props} from 'react';
import '../assets/styles/footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => { 
        return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>&copy; 2020 Devils Corral</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;
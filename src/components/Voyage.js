import React, { Component } from 'react';
import '../App.css';
import { storage } from '../firebase';
import 'firebase/storage';
import ReactPlayer from 'react-player'

class Strategy extends Component {

    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom my-shadow'
            url= './videos/voyage.mp4'
            width='100%'
            height='auto'
            controls = {true}
            />
        </div>
        )
    }
}

export default Strategy;
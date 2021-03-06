import React, { Component } from 'react';
import '../App.css';
import 'firebase/storage';
import ReactPlayer from 'react-player'

class Investment extends Component {

    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom my-shadow'
            url= './videos/investment.mp4'
            width='100%'
            height='auto'
            controls = {true}
            />
        </div>
        )
    }
}

export default Investment;
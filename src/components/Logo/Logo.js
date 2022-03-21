import React from 'react';
import Tilt from 'react-tilt';
import ScoreBoard from "../ScoreBoard/ScoreBoard";

import brain from './brain.png'

function Logo({ scoreboard }) {
    return (
        <div className="ma4 mt0 mygrid">
            <Tilt className="Tilt br2 shadow-2 logo" options={{ max : 55 }}>
                <div className="Tilt-inner pa3" style={{textAlign: "center"}}>
                    <img src={brain} alt="logo" style={{paddingTop: "5px"}}/>
                </div>
            </Tilt>
            <ScoreBoard scoreboard={scoreboard}/>
        </div>
    );
}

export default Logo;
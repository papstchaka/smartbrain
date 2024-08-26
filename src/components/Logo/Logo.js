import React from 'react';
import { Tilt } from 'react-tilt'; // Corrected import statement
import ScoreBoard from "../ScoreBoard/ScoreBoard";

import brain from './brain.png'

function Logo({ scoreboard }) {
    return (
        <div className='container mb4 mt5'>
            <div className='box'>
                <div className='box-row box-row-start'>
                    <Tilt className="Tilt br2 shadow-2 logo" options={{ max : 55 }}>
                        <div className="Tilt-inner pa3" style={{textAlign: "center"}}>
                            <img src={brain} alt="logo" style={{height: "100%", width: "100%"}}/>
                        </div>
                    </Tilt>
                </div>
                <div className='box-row box-row-end'>
                    <ScoreBoard scoreboard={scoreboard}/>
                </div>
            </div>
        </div>
    );
}

export default Logo;

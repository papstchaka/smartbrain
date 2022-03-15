import React from 'react';
import Tilt from 'react-tilt';

import './ScoreBoard.css'

function ScoreBoard({ scoreboard }) {
    
    return (
        <div className="ma4">
            <div className="shadow-2">
                <Tilt className="Tilt-inner pa2 scoreboard br2 shadow-2">
                    <p className='mt0 myp'>Current Scoreboard of detected faces: </p>
                    {
                        scoreboard.map((entries) => {
                            return <p className='mb0 myp'>{entries.name}: {entries.count}</p>
                        })
                    }
                </Tilt>
            </div>
        </div>
    );
}

export default ScoreBoard;
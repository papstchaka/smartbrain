import React from 'react';

import './Rank.css'

function Rank({name, entries}) {
    return (
        <div>
            <div className="f2 b center">
                <p className='ma0 pbackground'>{`${name}, you already found...`}</p>
            </div>
            <div className="f2 b center">
                <p className='ma0 pbackground'>{`${entries} faces!`}</p>
            </div>
        </div>
    );
}

export default Rank;
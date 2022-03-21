import React from 'react';

function Rank({name, entries}) {
    return (
        <div>
            <div className="f2 b center">
                <p className='ma0 pbackground'>{`${name.toUpperCase()}, you already found...`}</p>
            </div>
            <div className="f2 b center">
                <p className='ma0 pbackground'>{`${entries} faces!`}</p>
            </div>
        </div>
    );
}

export default Rank;
import React from 'react';

function Rank({name, entries}) {
    return (
        <div>
            <div className="white f3">
                {`${name}, you already found...`}
            </div>
            <div className="white f1">
                {`${entries} faces!`}
            </div>
        </div>
    );
}

export default Rank;
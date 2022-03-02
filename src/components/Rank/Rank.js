import React from 'react';

function Rank({name, entries}) {
    return (
        <div>
            <div className="f2 b">
                {`${name}, you already found...`}
            </div>
            <div className="f2 b">
                {`${entries} faces!`}
            </div>
        </div>
    );
}

export default Rank;
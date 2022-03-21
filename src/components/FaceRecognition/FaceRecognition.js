import React from 'react';

function FaceRecognition({ imageUrl, boxes }) {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" src={imageUrl} alt="" width="500px" height="auto"/>
                {
                    boxes.map((box,_) => {
                        return <div key={_} className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;
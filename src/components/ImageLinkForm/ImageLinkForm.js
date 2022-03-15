import React from 'react';

import './ImageLinkForm.css'

function ImageLinkForm({ onInputChange, onPictureSubmit }) {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onPictureSubmit()
        }
    }
    
    return (
        <div>
            <p className="f2 b ma0 mb4 pbackground center">
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center backgroundwhite" onChange={onInputChange} onKeyPress={handleKeyPress}/>
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-gray"
                        onClick={onPictureSubmit}>
                            Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
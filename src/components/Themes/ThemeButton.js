import React from 'react';

import "../Navigation/Navigation.css"


function ThemeButton({ triggerToggle, toggle }) {
    return (
        <div className='ma2'>
            <div onClick={() => triggerToggle()} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
                <div className="wrg-toggle-container">
                    <div className="wrg-toggle-check">
                        <span>🌜</span>
                    </div>
                    <div className="wrg-toggle-uncheck">
                        <span>🌞</span>
                    </div>
                </div>
                <div className="wrg-toggle-circle"></div>
                <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
            </div>
        </div>  
    );
}

export default ThemeButton;
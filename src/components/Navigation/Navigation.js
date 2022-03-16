import React from 'react';
import ThemeButton from "../Themes/ThemeButton";
import _Modal from "./Modal";

import './Navigation.css';

function Navigation( {onRouteChange, isSignedIn, deleteProfile, triggerToggle, toggle, user, loadUser, getScoreBoard} ) {
        
    const [showProfile, setShow] = React.useState(false);
  
    const handleCloseProfile = () => setShow(false);
    const handleShowProfile = () => setShow(true);

    const handleSignout = () => {
        handleCloseProfile();
        onRouteChange('signin');
    }

    if (isSignedIn) {
        return (
            <>
                <nav style={{display: "flex", justifyContent: 'space-between'}}>
                    <ThemeButton triggerToggle={triggerToggle} toggle={toggle}/>
                    <div>
                        <p onClick={handleShowProfile} className='cta-btn cta-btn--hero sticksy'>
                            Profile
                        </p>
                        <p onClick={handleSignout} className='cta-btn cta-btn--hero sticksy'>
                            Sign Out
                        </p>
                    </div>
                </nav>
                <_Modal handleCloseProfile={handleCloseProfile} handleShowProfile={handleShowProfile} showProfile={showProfile} deleteProfile={deleteProfile} user={user} loadUser={loadUser} getScoreBoard={getScoreBoard}/>
            </>
        );
    } else {
        return (
            <nav style={{display: "flex", justifyContent: 'space-between'}}>
                <ThemeButton triggerToggle={triggerToggle} toggle={toggle}/>
                <div>
                    <p onClick={() => onRouteChange('signin')} className='cta-btn cta-btn--hero sticksy'>
                        Sign In
                    </p>
                    <p onClick={() => onRouteChange('register')} className='cta-btn cta-btn--hero sticksy'>
                        Register
                    </p>
                </div>
            </nav>
        );
    }
}

export default Navigation;
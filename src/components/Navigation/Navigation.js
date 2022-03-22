import React from 'react';
import ThemeButton from "../Themes/ThemeButton";
import _Modal from "./Modal";
import { Dropdown } from 'react-bootstrap'

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
                <nav className="navbar">
                    <ThemeButton triggerToggle={triggerToggle} toggle={toggle}/>
                    <div className="ma2 tc">
                        <Dropdown>
                            <Dropdown.Toggle variant="success"style={{background: "none", border: "none", padding: "0"}}>
                                <img src="https://img.myloview.de/poster/house-icon-element-of-zoo-for-mobile-concept-and-web-apps-icon-outline-thin-line-icon-for-website-design-and-development-app-development-400-161676774.jpg" className="br-100 dib" alt="avatar" style={{width: "36px", height: "36px", backdropFilter: "blur(20px)"}}/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{display: "flex", flexDirection: "column", zIndex: "999", borderRadius: "5px", border: "2px solid white"}}>
                                <Dropdown.Item onClick={handleShowProfile}><p className='cta-btn cta-btn--hero sticksy'>Profile</p></Dropdown.Item>
                                <Dropdown.Item onClick={handleSignout}><p className='cta-btn cta-btn--hero sticksy'>Sign Out</p></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
                <_Modal handleCloseProfile={handleCloseProfile} handleShowProfile={handleShowProfile} showProfile={showProfile} deleteProfile={deleteProfile} user={user} loadUser={loadUser} getScoreBoard={getScoreBoard}/>
            </>
        );
    } else {
        return (
            <nav className="navbar">
                <ThemeButton triggerToggle={triggerToggle} toggle={toggle}/>
                <div className="ma2 tc">
                    <Dropdown>
                        <Dropdown.Toggle variant="success"style={{background: "none", border: "none", padding: "0"}}>
                            <img src="https://img.myloview.de/poster/house-icon-element-of-zoo-for-mobile-concept-and-web-apps-icon-outline-thin-line-icon-for-website-design-and-development-app-development-400-161676774.jpg" className="br-100 dib" alt="avatar" style={{width: "36px", height: "36px", backdropFilter: "blur(20px)"}}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{display: "flex", flexDirection: "column", zIndex: "999", borderRadius: "5px", border: "2px solid white"}}>
                            <Dropdown.Item onClick={() => onRouteChange('signin')}><p className='cta-btn cta-btn--hero sticksy'>Sign In</p></Dropdown.Item>
                            <Dropdown.Item onClick={() => onRouteChange('register')}><p className='cta-btn cta-btn--hero sticksy'>Register</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        );
    }
}

export default Navigation;
import React from 'react';

function Navigation( {onRouteChange, isSignedIn, deleteProfile} ) {
    if (isSignedIn) {
        return (
            <nav style={{display: "flex", justifyContent: 'flex-end'}}>
                <p onClick={() => deleteProfile()} className='f3 link dim black underline pa3 pointer'>
                    Delete Profile
                </p>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: "flex", justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>
                    Sign In
                </p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>
                    Register
                </p>
            </nav>
        );
    }
}

export default Navigation;
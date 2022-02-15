import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './Navigation.css';

function Navigation( {onRouteChange, isSignedIn, deleteProfile} ) {
    
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        handleClose();
        deleteProfile();
    }

    const handleSignout = () => {
        handleClose();
        onRouteChange('signin');
    }

    if (isSignedIn) {
        return (
            <>
                <nav style={{display: "flex", justifyContent: 'flex-end'}}>
                    <p onClick={handleShow} className='cta-btn cta-btn--hero'>
                        Delete Profile
                    </p>
                    <p onClick={handleSignout} className='cta-btn cta-btn--hero'>
                        Sign Out
                    </p>
                </nav>

                <Modal show={show} onHide={handleClose} dialogClassName="modal-big" contentClassName="modal-content">
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter"><h3>Are you sure deleting your profile?</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero" onClick={handleClose}>
                        No
                        </a>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero" onClick={() => handleDelete()}>
                        Yes
                        </a>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else {
        return (
            <nav style={{display: "flex", justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='cta-btn cta-btn--hero'>
                    Sign In
                </p>
                <p onClick={() => onRouteChange('register')} className='cta-btn cta-btn--hero'>
                    Register
                </p>
            </nav>
        );
    }
}

export default Navigation;
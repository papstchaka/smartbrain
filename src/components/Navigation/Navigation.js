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

                <Modal show={show} onHide={handleClose} dialogClassName="modal-big">
                    <Modal.Header>
                        <Modal.Title className="modal-header"><h2 className="modal-header">Smart Brain</h2></Modal.Title>
                    </Modal.Header>
                    <hr></hr>
                    <Modal.Body className="modal-body">
                        <p>Are you sure you want to delete your profile?</p>
                    </Modal.Body>
                    <hr></hr>
                    <Modal.Footer>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero ctn-btn--modal" onClick={handleClose}>
                        No
                        </a>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero ctn-btn--modal" onClick={() => handleDelete()}>
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
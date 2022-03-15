import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ThemeButton from "../Themes/ThemeButton";

import './Navigation.css';

function Navigation( {onRouteChange, isSignedIn, deleteProfile, triggerToggle, toggle} ) {
    
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
                <nav style={{display: "flex", justifyContent: 'space-between'}}>
                    <ThemeButton triggerToggle={triggerToggle} toggle={toggle}/>
                    <div>
                        <p onClick={handleShow} className='cta-btn cta-btn--hero sticksy'>
                            Delete Profile
                        </p>
                        <p onClick={handleSignout} className='cta-btn cta-btn--hero sticksy'>
                            Sign Out
                        </p>
                    </div>
                </nav>
                <Modal show={show} onHide={handleClose} dialogClassName="modal-big modal" className="modal">
                    <Modal.Header>
                        <Modal.Title className="modal-header"><h2 className="modal-header">Smart Brain</h2></Modal.Title>
                    </Modal.Header>
                    <hr></hr>
                    <Modal.Body className="modal-body">
                        <p>Are you sure you want to delete your profile?</p>
                    </Modal.Body>
                    <hr></hr>
                    <Modal.Footer>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero cta-btn--modal" onClick={handleClose}>
                        No
                        </a>
                    <a rel="noopener noreferrer" className="cta-btn cta-btn--hero cta-btn--modal" onClick={() => handleDelete()}>
                        Yes
                        </a>
                    </Modal.Footer>
                </Modal>
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
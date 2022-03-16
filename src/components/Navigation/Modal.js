import React from 'react';
import Modal from 'react-bootstrap/Modal';

import "./Navigation.css"


function _Modal({ handleCloseProfile, handleShowProfile, showProfile, deleteProfile, user }) {
        
    const [showDelete, setShow] = React.useState(false);
  
    const handleCloseDelete = () => {
        setShow(false);
    }
    const handleShowDelete = () => {
        handleShowProfile();
        setShow(true);
    }

    const handleDelete = () => {
        handleCloseProfile();
        handleCloseDelete();
        deleteProfile();
    }

    return (
        <div>
            <Modal show={showProfile} onHide={() => handleCloseProfile()} dialogClassName="profile-modal" className="profile-modal">       
                <article className='br3 ba b--black-10 mv4 w-100 w-50-m mw6 shadow-5 center modal modal-big'>
                    <main className='pa4 w-80' style={{textAlign: "center"}}>
                        <img src='http://tachyons.io/img/logo.jpg' className='h3 w3 dib center' alt='avatar'/>
                        <h1>{user.name}</h1>
                        <h4>{`Images submitted: ${user.entries}`}</h4>
                        <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                        <hr />
                        <div className='mt4' style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={handleShowDelete}>
                                Delete Profile
                            </button>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={() => handleCloseProfile()}>
                                Cancel
                            </button>
                        </div>
                    </main>
                    <div className='modal-close' onClick={() => handleCloseProfile()}>
                        &times;
                    </div>
                </article>
            </Modal>
            <Modal show={showDelete} onHide={handleCloseDelete} dialogClassName="profile-modal" className="profile-modal">    
                <article className='br3 ba b--black-10 mv4 w-100 w-50-m mw6 shadow-5 center modal modal-big'>
                    <main className='pa4 w-80' style={{textAlign: "center"}}>
                        <p>Are you sure you want to delete your profile?</p>
                        <div className='mt4' style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={handleCloseDelete}>
                                No
                            </button>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={() => handleDelete()}>
                                Yes
                            </button>
                        </div>
                    </main>
                    <div className='modal-close' onClick={() => handleCloseProfile()}>
                        &times;
                    </div>
                </article>
            </Modal>
        </div>
    );
}

export default _Modal;
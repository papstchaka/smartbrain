import React from 'react';
import Modal from 'react-bootstrap/Modal';

import "./Navigation.css"


function _Modal({ handleCloseProfile, handleShowProfile, showProfile, deleteProfile, user, loadUser, getScoreBoard }) {
        
    const [showDelete, setShow] = React.useState(false);
    const [name, setName] = React.useState(user.name);
    const [age, setAge] = React.useState(user.age);
    const [pet, setPet] = React.useState(user.pet);

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

    const onProfileUpdate = (data) => {
        fetch(`https://strawberry-pie-56167.herokuapp.com/profile/${data.id}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name
            })
        }).then(resp => {
            if (resp.status === 200 || resp.status === 304) {
                loadUser({ ...data, name: name, age: age, pet: pet });
            }
        }).catch(console.log)
        getScoreBoard();
    }

    const onFormChange = (event) => {
        switch(event.target.name) {
          case 'user-name':
            setName(event.target.value)
            break;
          case 'user-age':
            setAge(event.target.value)
            break;
          case 'user-pet':
            setPet(event.target.value)
            break;
          default:
            return;
        }
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
                        <p>{`Age: ${user.age}`}</p>
                        <p>{`Favourite animal: ${user.pet}`}</p>
                        <hr />
                        <label className='mt2 fw6 mb2' htmlFor='user-name'>Name:</label>
                        <input onChange={onFormChange} type='text' name='user-name' className='pa2 ba w-100 mb2' placeholder={name}></input>
                        <label className='mt2 fw6 mb2' htmlFor='user-age'>Age:</label>
                        <input onChange={onFormChange} type='text' name='user-age' className='pa2 ba w-100 mb2' placeholder={age}></input>
                        <label className='mt2 fw6 mb2' htmlFor='user-pet'>Favourite Pet:</label>
                        <input onChange={onFormChange} type='text' name='user-pet' className='pa2 ba w-100 mb2' placeholder={pet}></input>
                        <div className='mt4' style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={handleShowDelete}>
                                Delete Profile
                            </button>
                            <button className='b pa1 grow pointer hover-white w-40 b--black-20 cta-btn--hero cta-btn--modal'
                                onClick={() => onProfileUpdate(user)}>
                                Update Profile
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
import React, { Fragment } from 'react'; 
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

import { MdEdit, MdDeleteForever, MdPhone, MdEmail } from 'react-icons/md';

const Modal = ({id, show, contacts, close, edit, remove}) => {
  return(
    <Fragment>
      <Backdrop show={show} close={close}/>
      <div style={{position: "absolute", top: '35%', left: "50%", zIndex: "1050", display: "block", width: '40%', height: '34%', transform: 'translate(-50%, -50%)'}} >
    
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{contacts[id].name}</h3>
              <Button
                  click={close}
                  label={<span aria-hidden="true">&times;</span>}
                  addClass='close'
                  type="button"
                />
            </div>
            <div className="modal-body">
              <div className='d-flex justify-content-center align-items-center'>
                <div className="col-4">
                  <img className="border" src={contacts[id].photo} width="100px" alt="User"/>
                </div>
                <div className="col-8">
                  <p><span style={{fontSize: '30px'}}><MdPhone/></span> <u className='pl-2'>{contacts[id].phone}</u></p>
                  <p><span style={{fontSize: '30px'}}><MdEmail/></span> <u className='pl-2'>{contacts[id].eMail}</u></p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
                <Button
                  click={edit}
                  label={<span> <MdEdit/> Edit</span>}
                  addClass='secondary'
                />
                <Button
                  click={remove}
                  label={<span> <MdDeleteForever/> Remove</span>}
                  addClass='secondary'
                />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal;
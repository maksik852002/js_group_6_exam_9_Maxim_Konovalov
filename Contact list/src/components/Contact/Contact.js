import React from 'react';

const Contact = props => (
    <div onClick={props.click} className=" col-6 py-2" style={{cursor: 'pointer'}}>
      <div className='d-flex border border-dark rounded align-items-center'>
        <div className="col-4 p-3" >
          <img className="border" src={props.photo} alt={props.name} width="100px"/>
        </div>
        <div className="col-8">
          <h4>{props.name}</h4>
        </div>
      </div>
    </div>
);

export default Contact;
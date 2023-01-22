import React, { useState } from 'react';
import "../App.css"

const Accordion = ({greet, city, country, email, phone, address, designation, state, contact, desc}) => {

    //TO SHOW DETAILS OR NOT
    const [show, setShow] = useState(false);
    

  return (
    <>
    <div className="details_container">

      <div className="basic">
        <div className="basic1">

          <p className='basic_headings'>{greet}</p>
          <div className='basic_headings'>
          <p className='heading letter'>CONTACT</p>
          <p className='basic_headings'>{contact}</p>
          </div>
          <div className='basic_headings'>
          <p className='heading letter'>CITY</p>
          <p className='basic_headings'>{city}</p>
          </div>
          <div className='basic_headings'>
          <p className='heading letter'>STATE</p>
          <p className='basic_headings'>{state}</p>
          </div>
          <p onClick={()=> {setShow(!show)}} className="toggle_details">{show ?"Hide Details": "View Details"}</p>
        </div>
        <div className="basic2">
      
          <div className="advanced">
            {show && <div className="alldetails">
              <div className="desc">
                <p className='letter'>Description</p>
                <p>{desc}</p>
              </div>
              <div className="other_details">
                <div className="other_details_left">
                  <div className="items">
                  <p className='letter'>Contact Person</p>
                  <p>{contact}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Designation</p>
                  <p>{designation}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Email</p>
                  <p>{email}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Phone</p>
                  <p>{phone}</p>
                  </div>
                </div>
                <div className="other_details_right">
                  <div className="items">
                  <p className='letter'>Address</p>
                  <p>{address}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>City</p>
                  <p>{city}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>State</p>
                  <p>{state}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Country</p>
                  <p>{country}</p>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
    </>
)}

export default Accordion;
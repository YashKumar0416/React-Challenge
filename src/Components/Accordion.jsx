import React, { useState } from 'react';
import "../App.css"

const Accordion = ({id, name, username, email, street, suite, city, zipcode, phone, website, company}) => {

    //TO SHOW DETAILS OR NOT
    const [show, setShow] = useState(false);
    

  return (
    <>
    <div className="details_container">

      <div className="basic">
        <div className="basic1">

          <div className='basic_headings'>
          <p className='heading letter'>NAME</p>
          <p className='basic_headings'>{name}</p>
          </div>
          <div className='basic_headings'>
          <p className='heading letter'>COMPANY</p>
          <p className='basic_headings'>{company}</p>
          </div>
          <div className='basic_headings'>
          <p className='heading letter'>WEBSITE</p>
          <p className='basic_headings'>{website}</p>
          </div>
          <p onClick={()=> {setShow(!show)}} className="toggle_details">{show ?"Hide Details": "View Details"}</p>
        </div>
        <div className="basic2">
      
          <div className="advanced">
            {show && <div className="alldetails">
              <div className="desc">
                <p className='letter'>Address</p>
                <p>{suite} , {street} , {city} , {zipcode}</p>
              </div>
              <div className="other_details">
                <div className="other_details_left">
                  <div className="items">
                  <p className='letter'>Contact Person</p>
                  <p>{name}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Username</p>
                  <p>{username}</p>
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
                  <p className='letter'>Company</p>
                  <p>{company}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Website</p>
                  <p>{website}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>City</p>
                  <p>{city}</p>
                  </div>
                  <div className="items">
                  <p className='letter'>Zipcode</p>
                  <p>{zipcode}</p>
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
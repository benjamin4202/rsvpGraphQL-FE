import React from 'react'

const Guest = (props) => {
  const { guest } = props;
  return (
      <div>
          <div>
           <h1>{guest.fullName}</h1>
           <p>{guest.street}</p>
           <p>{guest.streetTwo}</p>
           <p>{`${guest.city}, ${guest.state} ${guest.zip}`}</p>
          </div>
      </div>
  )
}

export default Guest

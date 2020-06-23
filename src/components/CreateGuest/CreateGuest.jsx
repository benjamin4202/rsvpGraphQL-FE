import React, { useState }  from 'react'
import { GUESTS_QUERY } from '../GuestList/GuestList'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const GUEST_MUTATION = gql`
  mutation GuestMutation($fullName: String!, $street: String!, $streetTwo: String, $city: String!, $state: String!, $zip: String!, $rsvp: Boolean!) {
      addGuest(fullName: $fullName, street: $street, streetTwo: $streetTwo, city: $city, state: $state, zip: $zip, rsvp: $rsvp) {
          id
          fullName
          street
          streetTwo
          city
          state
          zip
          rsvp
      }
  }
`
const CreateGuest = (props) => {
    const [fullName, setFullName] = useState('')
    const [street, setStreet] = useState('')
    const [streetTwo, setStreetTwo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [rsvp, setRsvp] = useState(false)

    return (
      <div>
          <input
            value={fullName}
            onChange={ e => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
           <input
            value={street}
            onChange={ e => setStreet(e.target.value)}
            type="text"
            placeholder="Street Address"
          />
           <input
            value={streetTwo}
            onChange={ e => setStreetTwo(e.target.value)}
            type="text"
            placeholder="House, Apt, Suite Number"
          />
           <input
            value={city}
            onChange={ e => setCity(e.target.value)}
            type="text"
            placeholder="City"
          />
           <input
            value={state}
            onChange={ e => setState(e.target.value)}
            type="text"
            placeholder="State"
          />
           <input
            value={zip}
            onChange={ e => setZip(e.target.value)}
            type="text"
            placeholder="Zip Code"
          />
          {/* <input
            value={rsvp}
            onChange={ e => setRsvp(e.target.value)}
            type="text"
            placeholder="RSVP"
          /> */}
          <Mutation
            mutation={GUEST_MUTATION}
            variables={{ fullName, street, streetTwo, city, state, zip, rsvp}}
            onCompleted={() => props.history.push('/')}
            update={(store, { data: { addGuest } }) => {
              const data = store.readQuery({ query: GUESTS_QUERY })
              console.log(data)
              data.guests.unshift(addGuest)
              store.writeQuery({
                query: GUESTS_QUERY,
                data
              })
            }}
          >
            { guestMutation => <button onClick={guestMutation} type="button">Submit</button>}
          </Mutation>
      </div>
    )

}

export default CreateGuest

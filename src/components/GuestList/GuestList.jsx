import React from 'react'
import Guest from '../Guest'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import DeleteGuest from '../DeleteGuest'

export const GUESTS_QUERY = gql`
{
  guests {
    id
    firstName
    lastName
    street
    streetTwo
    city
    state
    zip
  }
}
`

const GuestList = () => {

  return(
    <Query query={GUESTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>
          if (error) return <div>Error.</div>

          const guestsToRender = data.guests

          return (
              <div>
                  {guestsToRender.map(guest =>
                  <div key={guest.id}>
                    <Guest guest={guest} />
                    <button>edit</button>
                    <DeleteGuest id={guest.id} />
                  </div>
                  )}
              </div>
          )
        }}
    </Query>
  )
}

export default GuestList
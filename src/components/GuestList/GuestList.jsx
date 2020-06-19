import React from 'react'
import Guest from '../Guest'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GUESTS_QUERY = gql`
{
  guests {
    id
    fullName
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
                  {guestsToRender.map(guest => <Guest key={guest.id} guest={guest} />)}
              </div>
          )
        }}
    </Query>

  )

}

export default GuestList
import React, { useState } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Guest from '../Guest/Guest'

const GUEST_SEARCH_QUERY = gql`
  query GuestSearchQuery($filter: String!) {
    guests(filter: $filter) {
      id
      firstName
      lastName
      street
      streetTwo
      city
      state
      zip
      rsvp
      }
  }
`
const SearchComponent = (props) => {
  const [guests, setGuests] = useState([])
  const [filter, setFilter] = useState('')

  const _executeSearch = async () => {
      const result = await props.client.query({
          query: GUEST_SEARCH_QUERY,
          variables: { filter },
      })
      setGuests(result.data.guests)

  }

  return (
      <div>
          <div>
              <label>Search</label>
              <input
                type="text"
                onChange={e => setFilter(e.target.value)}
                />
                <button onClick={() => _executeSearch()} type="button">OK</button>
          </div>
          {
              guests.map((guest, index) => (
                  <Guest key={guest.id} guest={guest} index={index} />
              ))
          }
      </div>
  )
}

export default withApollo(SearchComponent)

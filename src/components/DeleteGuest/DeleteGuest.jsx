import React from 'react'
import { withRouter } from 'react-router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { GUESTS_QUERY } from '../GuestList/GuestList'

const DELETE_GUEST_MUTATION = gql`
  mutation DeleteGuestMutation($id: ID!) {
      deleteGuest(id: $id) {
          id
      }
  }
`

const DeleteGuest = (props) => {
  const { id } = props;
  const alertBeforeDelete = (e, deleteGuestMutation) => {
      e.preventDefault()
      e.stopPropagation()
      if (window.confirm("Are you sure you want to delete this guest?")) {
        deleteGuestMutation()
      } else {
          return
      }
  }
  return(
    <Mutation
      mutation={DELETE_GUEST_MUTATION}
      variables={{ id }}
      update={(store, { data: { deleteGuest } }) => {
        const data = store.readQuery({ query: GUESTS_QUERY })
        const newData = data.guests.filter((t) => t.id !== deleteGuest.id)
        store.writeQuery({
          query: GUESTS_QUERY,
          data: {guests: newData }
        })
      }}
    >
      {
        deleteGuestMutation => <button
          onClick={(e) => alertBeforeDelete(e, deleteGuestMutation)}
          type="button"
        >
          Remove
        </button>
      }
    </Mutation>
  )
}

export default withRouter(DeleteGuest)

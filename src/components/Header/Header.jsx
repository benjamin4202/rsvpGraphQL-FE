import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () => {
  return (
      <div>
          <h2>Site Header:</h2>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
          </ul>
          <h2>Admin Header:</h2>
          <ul>
              <li>
                  <Link to="/admin">Guest List</Link>
              </li>
              <li>
                  <Link to="admin/create">Add Guest</Link>
              </li>
              <li>
                  <Link to="admin/search">Search Guests</Link>
              </li>

          </ul>
      </div>
  )
}

export default withRouter(Header)

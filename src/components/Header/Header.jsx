import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/create">Add Guest</Link>
              </li>
          </ul>
      </div>
  )
}

export default withRouter(Header)

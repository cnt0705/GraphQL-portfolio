import React from 'react'
import './App.css'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  {
    viewer {
      login
    }
  }
`

const App = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>

      console.log(data)

      return (
        <p>Done</p>
      )
    }}
  </Query>
)

export default App

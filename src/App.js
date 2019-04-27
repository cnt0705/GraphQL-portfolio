import React from 'react'
import './App.css'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  {
    viewer {
      name
      url
      bio
      createdAt
      updatedAt
      avatarUrl(size: 280)
      repositories(first: 5) {
        nodes {
          name
          url
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 3) {
                  nodes {
                    message
                    pushedDate
                  }
                }
              }
            }
          }
        }
      }
      starredRepositories(first: 5) {
        nodes {
          name
          url
        }
      }
      following(first: 3) {
        nodes {
          name
        }
      }
      followers(first: 3) {
        nodes {
          name
          avatarUrl
          url
        }
      }
    }
  }
`

const App = () => (
  <Query query={query}>
    {({ loading, _error, data }) => {
      if (loading) return <p>Loading...</p>

      console.log(data)

      return (
        <p>Done</p>
      )
    }}
  </Query>
)

export default App

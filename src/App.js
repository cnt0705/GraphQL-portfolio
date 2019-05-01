import React from 'react'
import Loading from './Loading.js'
import Header from './components/Header.js'
import PageHeading from './components/PageHeading.js'
import Repositories from './components/Repositories.js'
import StarredRepositories from './components/StarredRepositories.js'
import Relations from './components/Relations.js'
import './assets/css/App.css'

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
      avatarUrl
      repositories(first: 5) {
        nodes {
          id
          name
          url
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 3) {
                  nodes {
                    id
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
          id
          name
          url
        }
      }
      following(first: 5) {
        nodes {
          id
          name
          avatarUrl
          url
        }
      }
      followers(first: 5) {
        nodes {
          id
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
      if (loading) return <Loading />

      const user = data.viewer
      const repos = user.repositories.nodes
      const starredRepos = user.starredRepositories.nodes
      const following = user.following.nodes
      const followers = user.followers.nodes

      return (
        <div>
          <Header user={user} />
          <main className='page-main-content'>
            <section className='page-section'>
              <PageHeading text='Repositories' className='page-section-heading' />
              <Repositories repositories={repos} />
            </section>
            <section className='page-section'>
              <PageHeading text='Starred Repositories' className='page-section-heading' />
              <StarredRepositories repositories={starredRepos} />
            </section>
            <div className='page-2cols'>
              <section className='page-2cols-section'>
                <PageHeading text='Following' className='page-section-heading' />
                <Relations users={following}></Relations>
              </section>
              <section className='page-2cols-section'>
                <PageHeading text='Followers' className='page-section-heading' />
                <Relations users={followers}></Relations>
              </section>
            </div>
          </main>
        </div>
      )
    }}
  </Query>
)

export default App

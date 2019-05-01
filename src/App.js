import React from 'react'
import Header from './components/Header.js'
import PageHeading from './components/PageHeading.js'
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
      following(first: 3) {
        nodes {
          id
          name
          avatarUrl
          url
        }
      }
      followers(first: 3) {
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
      if (loading) return <p>Loading...</p>

      const user = data.viewer
      const repos = user.repositories.nodes
      const starredRepos = user.starredRepositories.nodes
      const following = user.following.nodes
      const followers = user.followers.nodes

      return (
        <div>
          <Header user={user}></Header>
          <main className='page-main-content'>
            <section className='page-section'>
              <PageHeading text='Repositories'/>
              {repos.map(repo => {
                return (
                  <section key={repo.id}>
                    <h3>
                      <a href={repo.url} target="_blank">
                        {repo.name}
                      </a>
                    </h3>
                    <ul>
                      {repo.defaultBranchRef.target.history.nodes.map(commit => {
                        return (
                          <li key={commit.id}>
                            {commit.message}
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                )
              })}
            </section>
            <section className='page-section'>
              <PageHeading text='Starred Repositories'/>
              <ul>
                {starredRepos.map(repo => {
                  return (
                    <li key={repo.id}>
                      <a href={repo.url} target="_blank">
                        {repo.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </section>
            <div>
              <section>
                <PageHeading text='Following'/>
                <Relations users={following}></Relations>
              </section>
              <section>
                <PageHeading text='Followers'/>
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

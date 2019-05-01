import React from 'react'

import RepoName from './repository/RepoName'
import RepoHistories from './repository/RepoHistories'
import '../assets/css/repository.css'

const Repositories = props => (
  <ul className={props.className}>
    {props.repositories.map(repo => {
      return (
        <section key={repo.id} className='repository-item'>
          <RepoName name={repo.name} url={repo.url} className='repository-item-name' />
          <RepoHistories histories={repo.defaultBranchRef.target.history.nodes} className='repository-histories' />
        </section>
      )
    })}
  </ul>
)

export default Repositories

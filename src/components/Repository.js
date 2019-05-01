import React from 'react'

import RepoName from './repository/RepoName'
import RepoHistories from './repository/RepoHistories'
import '../assets/css/repository.css'

function Repository(props) {
  const repo = props.repository

  return (
    <section className='repository-item'>
      <RepoName name={repo.name} url={repo.url} className='repository-item-name'/>
      <RepoHistories histories={repo.defaultBranchRef.target.history.nodes}/>
    </section>
  )
}

export default Repository

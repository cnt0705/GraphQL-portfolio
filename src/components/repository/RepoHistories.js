import React from 'react'
import styled from 'styled-components'

import { formatDate } from '../../lib/day'

const List = styled.li`
  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
`

const RepoHistories = props => (
  <ul className={props.className}>
    {props.histories.map(commit => {
      return (
        <List key={commit.id}>
          {formatDate(commit.pushedDate)} / {commit.message}
        </List>
      )
    })}
  </ul>
)

export default RepoHistories

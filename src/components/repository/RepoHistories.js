import React from 'react'
import styled from 'styled-components'

import { formatDate } from '../../lib/day'

const Item = styled.li`
  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
`

const RepoHistories = props => (
  <ul className={props.className}>
    {props.histories.map(commit => {
      return (
        <Item key={commit.id}>
          {formatDate(commit.pushedDate)} / {commit.message}
        </Item>
      )
    })}
  </ul>
)

export default RepoHistories

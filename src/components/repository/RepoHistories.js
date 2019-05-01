import React from 'react'
import styled from 'styled-components'

import { formatDate } from '../../lib/day'

const LIST = styled.ul`
`

const ITEM = styled.li`
  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
`

const RepoHistories = props => (
  <LIST className={props.className}>
    {props.histories.map(commit => {
      return (
        <ITEM key={commit.id}>
          {formatDate(commit.pushedDate)} / {commit.message}
        </ITEM>
      )
    })}
  </LIST>
)

export default RepoHistories

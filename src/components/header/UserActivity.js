import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  display: flex;
  justify-content: space-between;
`

const Title = styled.span`
`

const Date = styled.span`
  font-size: .9rem;
`

const UserActivity = props => (
  <P className={props.className}>
    <Title>{props.title}</Title>
    <Date>{props.date}</Date>
  </P>
)

export default UserActivity

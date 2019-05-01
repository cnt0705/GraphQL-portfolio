import React from 'react'
import styled from 'styled-components'

const Line = styled.p`
  display: flex;
  justify-content: space-between;
`

const Title = styled.span`
  position: relative;
  flex: 1;

  &:after {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 80%;
    height: 1px;
    background-color: #ccc;
    content: '';
  }
`

const Date = styled.span`
  font-size: .9rem;
`

const UserActivity = props => (
  <Line className={props.className}>
    <Title>{props.title}</Title>
    <Date>{props.date}</Date>
  </Line>
)

export default UserActivity

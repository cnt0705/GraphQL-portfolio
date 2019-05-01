import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  display: flex;
  justify-content: space-between;
`

const TITLE = styled.span`
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
  <P className={props.className}>
    <TITLE>{props.title}</TITLE>
    <Date>{props.date}</Date>
  </P>
)

export default UserActivity

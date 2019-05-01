import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-weight: bold;
  font-size: 2.6rem;
`

const UserBio = props => (
  <P className={props.className}>{props.text}</P>
)

export default UserBio

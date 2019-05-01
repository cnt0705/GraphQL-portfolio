import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  height: auto;
`

const UserAvatar = props => (
  <Img src={props.url} alt={props.alt} className={props.className} />
)

export default UserAvatar

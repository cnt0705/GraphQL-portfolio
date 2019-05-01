import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-2.5em, -2.5em);
`

const Loading = () => (
  <Wrapper>
    <Spinner>
      <FontAwesomeIcon icon='spinner' size='5x' spin />
    </Spinner>
  </Wrapper>
)

export default Loading

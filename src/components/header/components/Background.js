import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: -10px;
  width: 100%;
  height: 100vh;
  background-color: #24272E;
  z-index: 4;
  transition: opacity 0.3s linear;
  opacity: 0;
  visibility: hidden;
  ${props => props.show && css`
    opacity: 0.9;
    visibility: visible !important;
  `}
`

const Center = styled.div`
  display: flex;
  height: min-content;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
`

const Link = styled.div`
  width: max-content;
  color: white;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 2.5rem;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px) !important;
  }
`

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   color: red;
// `

const Background = ({ show }) =>
  <Container show={show}>
    <Center>
      <Link>Travel Blog</Link>
      <Link>Travel Gallery</Link>
      <Link>Ana's portfolio</Link>
      <Link>About us</Link>
    </Center>
  </Container>

export default Background
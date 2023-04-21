import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
  return (
    <MainHeader>
        <NavLink to={"/"}>
          <img src='.\images\logo.png' alt="my logo img"/>
        </NavLink>
        <Nav></Nav>
    </MainHeader>
  )
}
const MainHeader = styled.header`
padding : 0 4.8rem;
margin-top : 10px;
height: 10 rem;
background-color:${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-item : center;
position : relative;

.logo{
    height: 5 rem;
}
`
export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

function NavBar() {
    return (
      <header>
          <TheHeader>Nick's Friends</TheHeader>
          <TheNav>
              <NavLink to={'/friendlist'}>Friend List</NavLink><br></br>
              <NavLink to={'/login'}>Login</NavLink>
          </TheNav>
      </header>
    )
  }
  
  export default NavBar

  const TheHeader = styled.header`
    font-size: 2.5rem;
    font-weight: bold;
  `;

  const TheNav = styled.nav`
    font-size: 1.5rem;
  `;
import { NavLink } from 'react-router-dom'

import React from 'react'

import { Outlet, useParams } from 'react-router-dom'
import { Container, Wrapper } from './styles'
import ProductByCategories from '../ProductByCategories'
const products = ['All', 'Bed', 'Sofa', 'Chair', 'Light']

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const { product } = useParams()

  let activeStyle = {
    color: '#292019',
    fontSize: '16px',
    marginLeft: ' 16px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
  let style = {
    marginLeft: ' 16px',
    textDecoration: 'none',
    color: '#72696A',
    fontSize: '16px',
  }
  return (
    <Wrapper>
      <Container>
        {products.map((product, index) => (
          <div key={index}>
            <NavLink
              to={`product/${product}`}
              style={({ isActive }) => (isActive ? activeStyle : style)}
            >
              {product}
            </NavLink>
          </div>
        ))}
      </Container>
      {product === undefined && <ProductByCategories />}
      <Outlet />
    </Wrapper>
  )
}

export { NavList }

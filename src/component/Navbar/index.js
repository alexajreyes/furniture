import {
  Wrapper,
  NavBarMenu,
  ContainerIcon,
  Container,
  ContainerIconBasket,
  Badge,
  Overlay,
  ContainerLogo,
} from '../Navbar/style'
import React, { useContext, useEffect } from 'react'
import Logo from '../../assets/icons/Logo.svg'
import Basket from '../../assets/icons/basket.svg'
import Person from '../../assets/icons/person.svg'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Turn as Hamburger } from 'hamburger-react'
import { useWindowWidth } from '../../hook/useWindowWith'

const NabvarComponent = () => {
  const theme = useContext(useTheme)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth >= 768 ? setIsOpenMenu(true) : setIsOpenMenu(false)
  }, [windowWidth])

  return (
    <Wrapper>
      <Container>
        <NavLink to="">
          <ContainerLogo src={Logo} alt="Logo-Homepage" />
        </NavLink>
        <Overlay visible={isOpenMenu} theme={theme}>
          <NavBarMenu theme={theme}>
            <a href="#AboutUS">about us</a>
            <a href="#Products">products</a>
            <a href="#ContactUS">contact us</a>
          </NavBarMenu>
        </Overlay>
        <ContainerIcon>
          <NavLink to="car-page">
            <ContainerIconBasket>
              <Badge>7</Badge>
              <img src={Basket} alt="Basket" />
            </ContainerIconBasket>
          </NavLink>
          <NavLink
            to="car-page"
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img src={Person} alt="Person" />
          </NavLink>
        </ContainerIcon>
      </Container>
      {windowWidth < 768 && (
        <Hamburger
          direction="center"
          color="#292019"
          size={24}
          toggled={isOpenMenu}
          toggle={setIsOpenMenu}
        />
      )}
    </Wrapper>
  )
}
export default React.memo(NabvarComponent)

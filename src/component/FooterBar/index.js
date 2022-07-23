import {
  NavbarMenu,
  ContainerIcon,
  Container,
  ContainerLogo,
  Copyright,
  Background,
} from './style'
import React, { useContext } from 'react'
import Logo from '../../assets/icons/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import InstagramIcon from '../../assets/icons/instagramYoutube.svg'
import LinkendinIcon from '../../assets/icons/Vector.svg'
import YoutubeIcon from '../../assets/icons/YoutubeIcon.svg'

const NabvarComponent = () => {
  const Theme = useContext(useTheme)

  return (
    <Background>
      <Container>
        <NavLink to="">
          <ContainerLogo src={Logo} alt="Logo-Homepage" />
        </NavLink>
        <NavbarMenu theme={Theme}>
          <a href="#AboutUS">about us</a>
          <a href="#Products">products</a>
          <a href="#Service">service</a>
        </NavbarMenu>
        <ContainerIcon>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alex-jatniel-flores-reyes-252310215/"
          >
            <img src={LinkendinIcon} alt="Linkendin Icon" />
          </a>
          <a target="_blank" href="https://www.instagram.com/alexajreyes/">
            <img src={InstagramIcon} alt="Person" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <img src={YoutubeIcon} alt="Person" />
          </a>
        </ContainerIcon>
      </Container>
      <Copyright>Copyright © 2022. Alex Reyes</Copyright>
      <Copyright>
        Designed by
        <a target="_blank" href="https://www.arshakir.com/">
          arshakir.com
        </a>
      </Copyright>
    </Background>
  )
}
export default React.memo(NabvarComponent)

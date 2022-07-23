import styled from 'styled-components'

export const Background = styled.div`
  margin-top: 52px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px 0;
  border-bottom: 1px solid #adadad;
  & a > img:active {
    transform: scale(0.9);
  }
`
export const ContainerLogo = styled.img`
  height: 30px;
`
export const NavbarMenu = styled.nav`
  display: flex;
  align-items: center;
  & a {
    margin-left: 16px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryText};
    font-size: 16px;
    &:hover {
      color: ${({ theme }) => theme.primaryText};
      font-weight: 700;
    }

    &:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -14px;
      background: ${({ theme }) => theme.secondaryText};
      height: 2px;
    }
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  gap: 32px;
  & img {
    width: 32px;
    height: 32px;
    padding: 4px;
  }
`
export const Copyright = styled.p`
  width: 100%;
  text-align: center;
  padding: 32px;
  & a {
    margin-left: 8px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryText};
    font-size: 16px;
    &:hover {
      color: ${({ theme }) => theme.primaryText};
      font-weight: 700;
    }
  }
`

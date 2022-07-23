import styled, { keyframes } from 'styled-components'

const slideBottom = keyframes`
  0% {
    transform: translateX(150px) rotateY(-90deg);
  }
  100% {
    transform: translateX(0) rotateY(0);
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-top: 32px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  align-items: center;
  & a > img:active {
    transform: scale(0.9);
  }
`
export const ContainerLogo = styled.img`
  height: 30px;
`
export const NavBarMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 1fr);
  grid-gap: 16px;
  border-radius: 4px;
  margin: 5%;
  width: 90%;
  padding: 32px 0px;
  z-index: 2;
  animation: ${slideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  background: ${({ theme }) => theme.background};
  @media (min-width: 768px) {
    animation: none;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: max-content;
    justify-content: end;
    margin: 0;
    padding: 0;
    width: auto;
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryText};
    font-size: 18px;
    position: relative;
    text-align: center;
    padding: 8px 0;

    &:last-of-type {
      color: ${({ theme }) => theme.secondaryText};
    }

    @media (min-width: 768px) {
      color: ${({ theme }) => theme.secondaryText};
      font-size: 14px;
      &:hover {
        color: ${({ theme }) => theme.primaryText};
        font-weight: 700;
      }

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -25px;
        background: ${({ theme }) => theme.secondaryText};
        height: 4px;
      }
    }
    &:last-child {
      color: ${({ theme }) => theme.accent};
    }
  }
`
export const ContainerIconBasket = styled.div`
  position: relative;
  & img:active {
    transform: scale(0.9);
  }
`
export const Badge = styled.div`
  padding: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: red;
  text-align: center;
  position: absolute;
  left: 18px;
  top: -6px;
  font-size: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.background};
  border-radius: 1px solid gray;
  z-index: 1;
`
export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  & img:nth-child(1) {
    margin-left: 22px;
  }
`
export const Overlay = styled.div`
  transition: all 1s ease;
  position: absolute;
  top: 84px;
  left: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  background: ${({ theme }) => theme.degradedBlack};
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background: ${({ theme }) => theme.background};
    height: 80px;
    position: static;
  }
`

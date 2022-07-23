import styled from 'styled-components'

export const ContainerCard = styled.div`
  margin-top: 16px;
  height: 305px;
  background: ${({ theme }) => theme.CardProduct};
`
export const Button = styled.button`
  border: none;
  width: 138px;
  height: 40px;
  background: ${({ theme }) => theme.buttonColor};
  border-radius: 20px;
  color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -18px;
`

export const ContainerButtonAddCar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`
export const ContainerIcon = styled.div`
  background: ${({ theme }) => theme.secondCard};
  padding: 4px;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  margin: auto 0;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  & img {
    width: 100%;
  }
`
export const ContainerInfo = styled.div`
  margin: 38px 38px 0 38px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const ContainerNameProduct = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`
export const ContainerPrices = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`
export const DiscountPrice = styled.h5`
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};
`

export const StandarPrice = styled.h6`
  text-decoration: 2px line-through ${({ theme }) => theme.secondaryText};
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryText};
`
export const ContainerProductImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

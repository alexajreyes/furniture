import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  background: #fbfbfb;
  margin-top: 120px;
`
export const ContainerContacUs = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
  align-items: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ContainerInfoContact = styled.div``

export const ContainerButton = styled.div`
  max-width: 328px;
`
export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 42px;
  padding: 0 8px;
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.background};
  border: none;
  font-weight: 600;
  &:active {
    transform: scale(0.9);
  }
`

export const ContainerImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: end;
    padding: 10%;
    & img {
      width: 70%;
      object-fit: cover;
    }
  }
  & img {
    width: 80%;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.357143px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  text-align: ${({ align }) => (align ? align : 'left')};
  font-weight: 800;
  margin: 52px 0;
  @media (min-width: 768px) {
    font-size: 54px;
    line-height: 48px;
    letter-spacing: -0.428571px;
  }
`

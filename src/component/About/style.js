import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const ContainerTecnologie = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 70px 0;
  gap: 4px;
`
export const ContainerImge = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
  }
`
export const ContainerBestProduct = styled.div`
  @media (min-width: 768px) {
    margin-top: 72px;
    display: grid;
    grid-template-columns: auto auto;
  }
`
export const FirtsContainerProduct = styled.div`
  display: flex;
  gap: 10px;
  background: ${({ theme }) => theme.card};
  justify-content: space-between;
  padding: 4% 8% 4% 29%;
`
export const SecondContainerProduct = styled.div`
  display: flex;
  gap: 22px;
  background: ${({ theme }) => theme.secondCard};
  justify-content: space-between;
  padding: 4% 16% 4% 6%;
`
export const InfoProduct = styled.div`
  @media (min-width: 768px) {
    gap: 120px;
  }
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  & h2 {
    font-size: 32px;
    font-weight: 700;
  }
`

export const ContainerImgeProduct = styled.div`
  max-width: 400px;
  margin: auto 0;
  & img {
    width: 100%;
  }
`

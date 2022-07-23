import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 15%;
  @media (min-width: 768px) {
    width: 100%;
    padding: 0 0 0 15%;
    margin-top: 70px;
  }
`
export const ContainerHero = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 372px 1fr;

    grid-gap: 10px;
    grid-auto-rows: 180px 1fr;
  }

  & h1 {
    display: grid;
    grid-column: 1 / 3;
    grid-row: 1;
    position: relative;
    margin: 62px 0 32px 0;
    color: ${({ theme }) => theme.primaryText};
    /* @media (min-width: 768px) { */
    @media (min-width: 980px) {
      font-size: 60px;
      line-height: 54px;
      min-width: 435px;
      font-weight: 600;
    }
    @media (min-width: 1330px) {
      font-size: 72px;
      line-height: 64px;
      letter-spacing: -1px;
      min-width: 670px;
      font-weight: 700;
    }
  }
`

export const ColDescription = styled.div`
  position: relative;
  grid-column: 1;
  grid-row: 2;
  margin-top: 120px;
`
export const DescriptionHero = styled.div`
  display: grid;
  gap: 20px;
  & span {
    color: ${({ theme }) => theme.secondaryText};
    text-align: justify;
    font-weight: 500;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.28125px;
    }
  }
`
export const ContainerButton = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px 0;
  & button {
    cursor: pointer;
    height: 42px;
    padding: 0 8px;
    &:active {
      transform: scale(0.9);
    }
  }
  & button:nth-child(1) {
    background: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.background};
    border: none;
    font-weight: 600;
  }
  & button:nth-child(2) {
    border: 1px solid ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonColor};
    font-weight: 600;
  }
`

export const ColImage = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
  }
`

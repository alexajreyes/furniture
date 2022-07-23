import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-top: 32px;
`
export const ContainerTaps = styled.div`
  margin-top: 98px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h3`
  @media (max-width: 480px) {
    font-size: 32px;
  }
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 28px;
`
export const ContentTitleProduct = styled.div`
  display: flex;
  gap: 16px;
  color: #72696a;
  font-size: 16px;
  font-weight: bold;
`
export const ContainerSeeAll = styled.div`
  display: flex;
  align-items: end;
  cursor: pointer;
  & :active {
    transform: scale(0.9);
  }
`
export const ContainerProduct = styled.div`
  margin-top: 120px;
`

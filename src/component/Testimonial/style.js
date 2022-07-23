import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-top: 32px;
`
export const ContainerPersonTestimonial = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
`
export const ContainerImage = styled.div`
  max-width: 470px;
  height: 470px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ContentTestimonial = styled.div``

export const Title = styled.h3`
  @media (max-width: 420px) {
    font-size: 32px;
  }
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 28px;
`
export const Info = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.secondaryText};
`
export const ContainerCarousel = styled.div``
export const WrapperCarousel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 22px;
`
export const ContainerImageCarousel = styled.div`
  display: flex;
  gap: 8px;
  bottom: 32px;
`

export const ImageCarousel = styled.div`
  @media (max-width: 360px) {
    width: 80px;
    height: 80px;
  }
  width: 128px;
  height: 128px;
  display: flex;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #fbfbf9;
  }
`
export const NamePersonTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const NamePerson = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
`
export const ConatinerIcon = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
`
export const ArrowIcon = styled.img`
  width: 32px;
  height: 32px;
`
export const ContainerRating = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  & p {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondaryText};
    margin-right: 8px;
  }
`

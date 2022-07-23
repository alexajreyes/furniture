import React from 'react'
import {
  Wrapper,
  ContainerPersonTestimonial,
  ContentTestimonial,
  Title,
  Info,
  ContainerImage,
  ContainerCarousel,
  ImageCarousel,
  NamePersonTestimonial,
  NamePerson,
  ContainerRating,
  WrapperCarousel,
  ContainerImageCarousel,
  ArrowIcon,
  ConatinerIcon,
} from './style'
import Rating from '../../assets/icons/Vector (2).svg'
import Arrow from '../../assets/icons/ArrowCarrouselLeft.svg'
import ArrowRight from '../../assets/icons/ArrowCarrouselRight.svg'

import useChangetestimonial from '../../hook/useChangetestimonial'

const TestimonialComponent = () => {
  const {
    testimonial,
    handleNextTestimonial,
    handlePrevTestimonial,
    listTestimonial,
  } = useChangetestimonial()

  const {
    Date: DateTesti,
    Name: NameTesti,
    Image: ImageTesti,
    Rating: RatingTesting,
  } = testimonial

  return (
    <Wrapper>
      <ContainerPersonTestimonial>
        <ContainerImage>
          <img src={ImageTesti} alt="TestiPerson" />
        </ContainerImage>
        <ContentTestimonial>
          <Title>
            Let’s see what our
            <br />
            customer’s say
          </Title>
          <Info>
            Dwelling and speedily ignorant any steepest. Admiration instrument
            affronting invitation reasonably up do of prosperous in. Shy saw
            declared age debating ecstatic man. Call in so want pure rank am
            dear were. Remarkably to continuing in surrounded diminution on.
          </Info>
        </ContentTestimonial>
      </ContainerPersonTestimonial>
      <ContainerCarousel>
        <WrapperCarousel>
          <ContainerImageCarousel>
            {listTestimonial.map((testimonial, index) => (
              <ImageCarousel key={index}>
                <img src={testimonial.Image} alt={testimonial.Name} />
              </ImageCarousel>
            ))}
          </ContainerImageCarousel>
          <NamePersonTestimonial>
            <NamePerson>{NameTesti}</NamePerson>
            <ContainerRating>
              <p>{DateTesti}</p>
              {Array(RatingTesting)
                .fill()
                .map((_, i) => (
                  <img key={i} src={Rating} alt="rating" />
                ))}
            </ContainerRating>
            <ConatinerIcon>
              <ArrowIcon
                src={Arrow}
                alt="Arrow"
                onClick={handleNextTestimonial}
              />
              <ArrowIcon
                src={ArrowRight}
                alt="ArrowRight"
                onClick={handlePrevTestimonial}
              />
            </ConatinerIcon>
          </NamePersonTestimonial>
        </WrapperCarousel>
      </ContainerCarousel>
    </Wrapper>
  )
}
export default React.memo(TestimonialComponent)

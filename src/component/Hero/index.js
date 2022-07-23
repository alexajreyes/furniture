import React, { useContext } from 'react'
import {
  Wrapper,
  ContainerHero,
  ColDescription,
  ColImage,
  DescriptionHero,
  ContainerButton,
} from './style'
import ImageArticle from '../../assets/images/Image.jpg'
import { useTheme } from 'styled-components'
import ImageMobile from '../../assets/images/couch-g77314e5be_1920-removebg-preview.png'
import { useWindowWidth } from '../../hook/useWindowWith'
const HeroComponent = () => {
  const theme = useContext(useTheme)

  const windowWidth = useWindowWidth()
  return (
    <Wrapper id="AboutUS">
      <ContainerHero>
        <h1>
          Modern Furniture For <br /> Modern Living Style
        </h1>
        <ColDescription theme={theme}>
          <DescriptionHero>
            <span>
              In unfeeling existence objection immediate repulsive on he in.
              Imprudence comparison uncommonly me he difficulty diminution
              resolution. Likewise proposal differed scarcely dwelling as on
              raillery.
            </span>
            <span>
              September few dependent extremity own continued and ten prevailed
              attending. Early to weeks we could. Do commanded an shameless we
              disposing do. Indulgence ten remarkably nor are impression out.
              Power is lived means oh every in we quiet.
            </span>
          </DescriptionHero>
          <ContainerButton theme={theme}>
            <button>Request a Quote</button>
            <button>Watch Video</button>
          </ContainerButton>
        </ColDescription>
        {windowWidth > 767 ? (
          <ColImage>
            <img src={ImageArticle} alt="ImageArticle" />
          </ColImage>
        ) : (
          <ColImage>
            <img src={ImageMobile} alt="ImageMobile" />
          </ColImage>
        )}
      </ContainerHero>
    </Wrapper>
  )
}
export default React.memo(HeroComponent)

import React from 'react'
import Tooltips from '../tooltips'
import {
  Wrapper,
  ContainerTecnologie,
  ContainerImge,
  ContainerBestProduct,
  InfoProduct,
  FirtsContainerProduct,
  SecondContainerProduct,
  ContainerImgeProduct,
} from './style'
import { Tecnologies } from '../../utils/tecnologies'
import Hospitality from '../../assets/images/hospitality-furniture.png'
import Residential from '../../assets/images/residentia-furniture.png'
const AboutComponent = () => {
  return (
    <>
      <Wrapper id="Service">
        <h5>SOME OF OUR TRUSTED CLIENTS</h5>
        <ContainerTecnologie>
          {Boolean(Tecnologies) &&
            Tecnologies.map((item, index) => (
              <Tooltips
                key={index}
                text={item.title}
                component={
                  <ContainerImge>
                    <img src={item.Image} alt={item.title} />
                  </ContainerImge>
                }
              />
            ))}
        </ContainerTecnologie>
      </Wrapper>
      <ContainerBestProduct>
        <FirtsContainerProduct>
          <InfoProduct>
            <h2>
              Residential <br /> Furniture
            </h2>
            <p>Browse Collection</p>
          </InfoProduct>
          <ContainerImgeProduct>
            <img src={Residential} alt="" />
          </ContainerImgeProduct>
        </FirtsContainerProduct>
        <SecondContainerProduct>
          <InfoProduct>
            <h2>
              Residential <br /> Furniture
            </h2>
            <p>Browse Collection</p>
          </InfoProduct>
          <ContainerImgeProduct>
            <img src={Hospitality} alt="" />
          </ContainerImgeProduct>
        </SecondContainerProduct>
      </ContainerBestProduct>
    </>
  )
}
export default React.memo(AboutComponent)

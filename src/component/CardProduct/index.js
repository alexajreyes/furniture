import React from 'react'
import {
  ContainerCard,
  ContainerButtonAddCar,
  ContainerIcon,
  Button,
  ContainerInfo,
  ContainerNameProduct,
  ContainerPrices,
  DiscountPrice,
  StandarPrice,
  ContainerProductImage,
} from './style'
import Basket from '../../assets/icons/basket2.svg'
// import Product from '../../assets/images/Product_Image_01-removebg-preview.png'
const CardProduct = ({ NameProduct, Price, PriceDiscont, ImageProdct }) => {
  return (
    <ContainerCard>
      <ContainerButtonAddCar>
        <Button>
          <p>Add to cart</p>
          <ContainerIcon>
            <img src={Basket} alt="Basket" />
          </ContainerIcon>
        </Button>
      </ContainerButtonAddCar>
      <ContainerInfo>
        <ContainerNameProduct>{NameProduct}</ContainerNameProduct>
        <ContainerPrices>
          <DiscountPrice>${PriceDiscont}.00</DiscountPrice>
          <StandarPrice>${Price}.00</StandarPrice>
        </ContainerPrices>
      </ContainerInfo>
      <ContainerProductImage>
        <img src={ImageProdct} alt="" />
      </ContainerProductImage>
    </ContainerCard>
  )
}
export default React.memo(CardProduct)

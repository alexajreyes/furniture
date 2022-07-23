import React from 'react'

import {
  ContainerTaps,
  ContainerProduct,
  Title,
  ContentTitleProduct,
  ContainerSeeAll,
  Wrapper,
} from './style'
import ArrowIcon from '../../assets/icons/Arrow.svg'
import { NavList } from '../BreadcumsProducts'

const ProductComponent = () => {
  return (
    <Wrapper id="Products">
      <ContainerTaps>
        <Title>Products</Title>
        <ContentTitleProduct>
          <p>Best Selling</p>
          <p>Most Popular</p>
        </ContentTitleProduct>
        <ContainerSeeAll>
          <p>Se all</p>
          <img src={ArrowIcon} alt="ArrowIcon" />
        </ContainerSeeAll>
      </ContainerTaps>
      <ContainerProduct>
        <NavList />
      </ContainerProduct>
    </Wrapper>
  )
}
export default React.memo(ProductComponent)

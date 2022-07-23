import React from 'react'
import CardProduct from '../CardProduct'
import { Wrapper } from './style'
import { Products } from '../../utils/Products'
import useProductByCategories from '../../hook/useProductByCategories'
import { useParams } from 'react-router-dom'

const ProductByCategories = () => {
  const { product } = useParams()
  const { Newproduct } = useProductByCategories(Products, product)

  return (
    <Wrapper>
      {Boolean(Newproduct) &&
        Newproduct.map((product, index) => (
          <div key={index}>
            <CardProduct
              NameProduct={product.Name}
              Price={product.Price}
              PriceDiscont={product.PriceDiscount}
              ImageProdct={product.Image}
            />
          </div>
        ))}
    </Wrapper>
  )
}
export default React.memo(ProductByCategories)

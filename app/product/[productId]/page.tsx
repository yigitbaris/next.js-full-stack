import DetailClient from '@/app/components/detail/DetailClient'
import { products } from '@/utils/Products'
import React from 'react'
import getProductsId from '@/app/actions/getProductsId'

type DetailProps = {
  productId?: string
}

const Detail = async ({ params }: { params: DetailProps }) => {
  const { productId } = params
  const product = await getProductsId({ productId: productId })

  console.log(product, 'detail page product')

  return (
    <div>
      <DetailClient product={product} />
    </div>
  )
}
export default Detail

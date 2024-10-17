import Heading from '../general/Heading'
import ProductCard from './ProductCard'
import getProducts from '@/app/actions/getProducts'

const Products = async () => {
  const products = await getProducts({ category: null })

  return (
    <div>
      <Heading text='Tüm Ürünler' />
      <div className='flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10'>
        {products.length === 0 ? (
          <div className='text-3xl font-bold'>There is no product...</div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}
export default Products

import React from 'react';
import { Products } from '../DB/ProductsData';
import ProductItems from '../DB/ProductsData.json';

const ProductList = () => {
    const array = [...ProductItems.products];
  return (
    <div className='w-[80%] m-auto text-center mt-8'>
      <h1 className='my-4'>OUR FEATURED PRODUCTS</h1>
      <div>

        <div className='my-4 flex justify-between'>ALL</div>
        <div className='flex justify-between text-left'>
            {array.map(product => (
              <div key={product.id}>
                console.log(array)
                <div className='overflow-hidden' key={product.id}>
                    <img className='w-[25rem] border object-cover' src={product.image} alt="" />
                    <div>{product.category}</div>
                    <div>{product.price}</div>
                </div>
              </div>

            ))} 
            {/* <div className=''>
                <img className='w-[15rem] border' src={require('./Assets/strapi-images/alex-hddife-6wWiZlA2n0Q-unsplash.jpeg')} alt="" />
                <div>category</div>
                <div>price</div>
            </div>
            <div className=''>
                <img className='w-[15rem] border' src={require('./Assets/strapi-images/alex-hddife-6wWiZlA2n0Q-unsplash.jpeg')} alt="" />
                <div>category</div>
                <div>price</div>
            </div>
            <div className=''>
                <img className='w-[15rem] border' src={require('./Assets/strapi-images/alex-hddife-6wWiZlA2n0Q-unsplash.jpeg')} alt="" />
                <div>category</div>
                <div>price</div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProductList

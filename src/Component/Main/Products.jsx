import React from 'react';

const Products = () => {

  const categories = [
    {
      name: 'ALL',
      id: 'all'
    },
    {
      name: 'NEW ARRIVALS',
      id: 'newArrivals'
    },
    {
      name: 'BEST SELLER',
      id: 'bestSellers'
    },
    {
      name: 'TOP RATED',
      id: 'topRated'
    }
  ]

  // <div key={product.id}>
  //   const productsCategories = array.map(product => (
  //     <div className='overflow-hidden' key={product.id}>
  //         <img className='w-[25rem] border object-cover' src={product.image} alt="" />
  //         <div>{product.category}</div>
  //         <div>{product.name }</div>
  //         <div>{product.price}</div>
  //     </div>
  //   ))
  // </div>

  const productsShowHandler = async (id) => {
    const response = await fetch('http://localhost:5000/products')
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className='w-[80%] m-auto text-center mt-8'>
      <div>
        <ul className='flex justify-center'>
          {categories.map(item => (
            <li className='px-5 py-2 border cursor-pointer' onClick={() => productsShowHandler(item.id)}>{item.name}</li>
          ))}
        </ul>
      </div>





      {/* <div>

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

            ))}  */}
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
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default Products;

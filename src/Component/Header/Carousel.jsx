import React from 'react';
import image1 from './Assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg';
import image2 from './Assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg';

const Carousel = () => {
  return (
    <>
        <div className='flex overflow-hidden w-[100%] border h-[50vh] bg-cover'>
            <img className='w-full object-cover center' src={image1} alt="Carouse images" />
            {/* <img src={image2} alt="Carouse images" /> */}
        </div>
    </>
  )
}

export default Carousel

import React from 'react';
import image1 from '../Images/cabin.png';
import image2 from '../Images/cake.png';
import image3 from '../Images/circus.png';
import image4 from '../Images/game.png';
import image5 from '../Images/safe.png';
import image6 from '../Images/submarine.png'

export default function Portfolio() {
  return (
    <div className='container mb-5 text-center '>
      <h2 className='text-uppercase  text-center pt-2 pb-1'> portfolio</h2>
      <div className='d-flex'>
      <hr className="text-dark w-50 p-2 mx-3"></hr>
      <i class="fa-solid fa-star text-dark text-center fs-2 mb-2"></i>
      <hr className="text-dark w-50 p-2 mx-3"></hr>
      </div>
      <div className='row justify-content-center  '>
        <div className='col-md-3 mx-2 my-3'>
          <div>
            <img className='w-100 rounded imgItem' src={image1} alt='' />
          </div>

        </div>
        <div className='col-md-3 mx-2 my-3'>
          <div>
            <img className='w-100 rounded imgItem' src={image2} alt='' />
          </div>

        </div>
        <div className='col-md-3 mx-2 my-3'>
          <div>
            <img className='w-100 rounded imgItem' src={image3} alt='' />
          </div>

        </div>
        <div className='col-md-3 mx-2 my-2'>
          <div>
            <img className='w-100 rounded imgItem' src={image4} alt='' />
          </div>

        </div>
        <div className='col-md-3 mx-2 my-2'>
          <div>
            <img className='w-100 rounded imgItem' src={image5} alt='' />
          </div>

        </div>
        <div className='col-md-3 mx-2 my-2'>
          <div>
            <img className='w-100 rounded imgItem' src={image6} alt='' />
          </div>

        </div>

      </div>

    </div>
  )
}

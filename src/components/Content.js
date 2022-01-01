import React from 'react';
import ImageOne from '../images/SDK1.jpg';
import ImageTwo from '../images/SDK2.jpg';
import { Link } from 'react-router-dom';


const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-10 shadow' />
        <div className='center-content items-center'>
          <h2 className='text-2xl mb-2 '>Contents:</h2>
          <p className='m-10 text-center'>Drums <br />
                          FX<br />
                          Loops (including Sango Funk Carioca 2)<br />
                          Textures<br />
                          Vocals<br />

                          Drums used in:<br />

                          Moments Spent Loving You<br />
                          In the Comfort Of<br />
                          De Mim, Pra Você<br />
                          Acima<br />
                          The Healing Component by Mick Jenkins<br />
                          Blkswn & NØIR by Smino<br />
                          Wow That's Crazy by Wale<br />
                          Milky Way by Bas<br />
                          + more</p>
          <span>$16</span>
          <Link
        className='py-6 px-10 mt-10 mb-80 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center'
        to='/menu'
      >
        Mint{' '}
        <svg
          className='w-6 h-6 ml-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </Link>
        </div>
      </div>
      <div className="bg-white h-20"></div>

      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-10 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2 text-center'>“Sango - Soulection mainstay, groovemaster, flavorful chef of so many sounds and genres - <br /> 
          be it R&B, trap, baile funk, jazz - now lets you in on his many wonderful and eclectic sounds. <br /> 
          You're not ready for this one - dive in now.”</p>
          <span>$18</span>
          <Link
        className='py-6 px-10 mt-10 mb-20 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center'
        to='/menu'
      >
        Mint{' '}
        <svg
          className='w-6 h-6 ml-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </Link>
        </div>
      </div>
    </>
  );
};

export default Content;

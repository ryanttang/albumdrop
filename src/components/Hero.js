import React from 'react';
import { Link } from 'react-router-dom';
import ImageThree from '../images/sango.jfif';
import ImageFour from '../images/sangologo.png';
import { useMoralis } from "react-moralis";




const Hero = () => {

  const { authenticate } = useMoralis();

  return (
    <div className='bg-white h-auto w-full flex flex-col justify-center items-center'>
    <img src={ImageFour} alt='main-pic' className='h-40 rounded mb-auto' />
    <img src={ImageThree} alt='main-pic' className='h-96 rounded mb-10 shadow' />

    <div className="mt-10 mb-10">
            <input
              onClick={authenticate}
              type="submit"
              value="Login with Wallet"
              className="py-3 px-3 mb-10 bg-yellow-500 hover:bg-green-600 rounded text-white text-center w-full"
            />
          </div>

      {/* <Link
        className='py-2 px-10 mb-20 bg-yellow-500 rounded-full text-xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center'
        to='/menu'
      >
        Connect Wallet{' '}
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
      </Link> */}
     
    </div>
  );
};

export default Hero;

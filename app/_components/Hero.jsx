"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faBrain, faArrowAltCircleRight, faArrowRightArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='flex flex-col w-full p-6 '>

       <div className="flex w-full justify-self-start items-center my-6 justify-center">
        <span className='text-center flex font-bold self-center mx-3  text-5xl text-white ' style={{animation:'brain 2s ease-in-out forwards'}}>Quizzer  </span>
      <FontAwesomeIcon className='text-white w-10 justify-self-center self-center h-10 ' style={{animation:'brain 2s ease-in-out forwards'}}  icon={faBrain} />
      </div>
      <span className="text-center p-2 text-md lg:text-2xl lg:bg-transparent text-black bg-white my-3  lg:text-white">Master Any Topic, Any Time – With Personalized Quizzes Just for You!</span>
      <Link className='self-center justify-self-center items-center p-3 hover:bg-white hover:text-black transition-all duration-800  rounded-lg shadow-md bg-black text-white flex hover:shadow-blue-300 text-xl active:scale-110' href='/'>Take A Quiz <FontAwesomeIcon className='w-8 h-8 px-2 animate-[electric-flicker_1s_infinite]' icon={faArrowRight}> </FontAwesomeIcon></Link>
      <style jsx>
        {`
          @keyframes electric-flicker {
    0%, 100% {
      text-shadow: 
        0 0 5px rgba(255, 255, 255, 0.8),
        0 0 10px rgba(0, 255, 255, 0.7),
        0 0 20px rgba(0, 255, 255, 0.6),
        0 0 40px rgba(0, 255, 255, 0.5),
        0 0 80px rgba(0, 255, 255, 0.4);
    }
    50% {
      text-shadow: 
        0 0 3px rgba(255, 255, 255, 0.5),
        0 0 7px rgba(0, 255, 255, 0.4),
        0 0 15px rgba(0, 255, 255, 0.3),
        0 0 30px rgba(0, 255, 255, 0.2),
        0 0 60px rgba(0, 255, 255, 0.1);
        transform:scale(1.1);
    
    
        }
      
  }

    @keyframes brain {
    0% {
      opacity: 0.2;
      text-shadow: 
        0 0 5px rgba(0, 255, 255, 0.4),
        0 0 10px rgba(0, 255, 255, 0.3),
        0 0 15px rgba(0, 255, 255, 0.2);
    }
    50% {
      opacity: 0.7;
      text-shadow: 
        0 0 8px rgba(0, 255, 255, 0.6),
        0 0 12px rgba(0, 255, 255, 0.5),
        0 0 20px rgba(0, 255, 255, 0.4);
    }
    75% {
      opacity: 0.9;
      text-shadow: 
        0 0 15px rgba(0, 255, 255, 0.8),
        0 0 25px rgba(0, 255, 255, 0.7),
        0 0 35px rgba(0, 255, 255, 0.6);
    }
    85% {
      opacity: 1;
      text-shadow: 
        0 0 20px rgba(0, 255, 255, 1),      /* Intense inner glow */
        0 0 30px rgba(0, 255, 255, 0.9),   /* Middle glow */
        0 0 45px rgba(0, 255, 255, 1),      /* Bright outer glow */
        0 0 60px rgba(0, 255, 255, 1);      /* Final intense outer glow */
    }
  }

        
        `
          
        }
      </style>
    </div>
  )
}

export default Hero

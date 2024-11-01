import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faBrain, faArrowAltCircleRight, faArrowRightArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Itim} from "next/font/google"

const itim=Itim({
    weight:'400',
    subsets:['latin','thai', 'vietnamese']
})
const page = () => {
  return (
    <div className='grid p-6 bg-gradient-to-r from-purple-700  to-blue-400 lg:to-blue-600'>

<div className="flex w-full justify-self-start items-center my-6 justify-center">
        <span className='text-center flex font-bold self-center mx-3  text-5xl text-white ' style={{animation:'brain 2s ease-in-out forwards'}}>Quizzer  </span>
      <FontAwesomeIcon className='text-white w-10 justify-self-center self-center h-10 ' style={{animation:'brain 2s ease-in-out forwards'}}  icon={faBrain} />
      </div>


        <div className="bg-white m-6 flex-col flex p-6 rounded-lg text-black self-center justify-self-center">
            <span className={`lg:text-3xl text-xl text-center font-bold ${itim.className}  my-3`}>Personalize Your Quiz!</span>

            <div className="flex flex-col p-6 justify-self-center self-center ">

            <input type="text" className="ring-black border-gray-600 border-solid justify-self-start self-start border-2 p-2 rounded-xl" />
            </div>

        </div>

      
    </div>
  )
}

export default page

"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faBrain, faArrowAltCircleRight, faArrowRightArrowLeft, faArrowRight, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { Itim } from 'next/font/google';
import { useState } from 'react';
const itim = Itim({
  weight: '400',
  subsets: ['latin', 'thai', 'vietnamese'],
});

const Page = () => {
    const [name, setName]=useState()
    const [questions,setQuestions]=useState()
    const [difficulty,setDifficulty]=useState()
    const [topic,setTopic]=useState()
  return (
    <div className="grid p-6 bg-gradient-to-r from-purple-700 to-blue-400 lg:to-blue-600">
      <div className="flex w-full justify-self-start items-center my-6 justify-center">
        <span
          className="text-center flex font-bold self-center mx-3 text-5xl text-white"
          style={{ animation: 'brain 2s ease-in-out forwards' }}
        >
          Quizzer
        </span>
        <FontAwesomeIcon
          className="text-white w-10 justify-self-center self-center h-10"
          style={{ animation: 'brain 2s ease-in-out forwards' }}
          icon={faBrain}
        />
      </div>

      <div className="bg-white m-6 flex-col flex p-6 rounded-lg text-black self-center justify-self-center">
        <span className={`lg:text-3xl text-xl text-center font-bold ${itim.className} my-3`}>
          Personalize Your Quiz!
        </span>

        <div className="flex flex-col p-6 justify-self-center self-center">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name..."
            className="border-gray-600 border-solid border-2 p-2 rounded-xl placeholder:text-center lg:text-xl text-lg text-center w-full mb-4"
            onChange={(e)=>{setName(e.target.value)}}
          
          />

          {/* Quiz Topic Input */}
          <input
            type="text"
            placeholder="Quiz Topic..."
            className="border-gray-600 border-solid border-2 p-2 rounded-xl placeholder:text-center lg:text-xl text-lg text-center w-full mb-4"
            onChange={(e)=>{setTopic(e.target.value)}}
          />   
          {/* Number of Questions Input */}
           <input
            type="number"
            placeholder="Number of Questions"
            max="15"
            min="1"
            className="border-gray-600 border-solid border-2 mb-3 p-2 rounded-xl placeholder:text-center lg:text-lg text-md text-center w-full"
            onChange={(e)=>{setQuestions(e.target.value)}}
          />

          {/* Difficulty Select Dropdown */}
          <select
            className="border-gray-600 border-solid border-2 p-2 rounded-xl lg:text-lg text-md text-center w-full mb-4"
            onChange={(e)=>{setDifficulty(e.target.value)}}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value='Harder'>Extra Hard</option>

          </select>
           <button className='hover:bg-gray-200 hover:text-black transition-all duration-800  rounded-lg shadow-md bg-black text-white flex hover:shadow-blue-300 text-xl active:scale-110 p-3 rounded-lg  bg-black justify-self-center self-center text-white flex shadow-md items-center text-center text-lg '>Start Quiz <FontAwesomeIcon className='w-5 mx-2 h-5' icon={faBoltLightning}/> </button>


       
      
        </div> 
       
      </div>
    </div>
  );
};

export default Page;

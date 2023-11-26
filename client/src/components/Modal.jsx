import React from 'react'

const Modals = ({message, onClose, firstBtn, secondBtn}) => {
  return (
    <div className='h-[100vh] opacity-1 bg-gray-800 absolute h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className="bg-white opacity-[1] lg:w-1/3 w-[80%] h-1/2 shadow-lg rounded-2xl flex flex-col">
          <div className='flex-1 flex flex-col gap-4 justify-center items-center text-2xl text-center px-5'>
            <span>{message}</span>
            <img className='h-[50px]' alt='success' src='/tick.jpg' />
          </div>
          <div className='py-4 flex px-5 gap-5 justify-around'>
          <button className='bg-red-800 flex-1 text-white py-2 px-5 rounded-lg' onClick={onClose}>{firstBtn}</button>
          <button className='bg-green-500 flex-1 text-white py-2 px-5 rounded-lg' onClick={onClose}>{secondBtn}</button>
          </div>
        </div>
    </div>
  )
}

export default Modals
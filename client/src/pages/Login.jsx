import React from 'react'

const Login = () => {
  return (
    <div className='p-4 h-[100vh] bg-cover bg-center "' style={{backgroundImage: "url(/inv.jpeg)"}}>
        <div className='p-3 mt-20'>
        <h2 className='text-center my-5 md:text-3xl text-2xl lg:text-5xl text-blue-900 font-semibold text-uppercase text-decoration-underline'>Login the Gift land</h2>
        <form action="" className='py-4 flex flex-col items-center'>
            <input type="text" placeholder='Enter Email' className='border my-4 w-full md:w-1/2 py-2 px-4 rounded placeholder:font-semibold placeholder:text-blue-900' />
            <input type="text" placeholder='Enter Password' className='border my-4 w-full md:w-1/2 py-2 px-4 rounded placeholder:font-semibold placeholder:text-blue-900' />
            <button className='my-4 border bg-gray-300 hover:bg-gray-200 text-blue-900 rounded w-full md:w-1/2 py-2'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login
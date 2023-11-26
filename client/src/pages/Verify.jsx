import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootbox/dist/bootbox.min.js';
import React, { useState } from 'react'
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';


const Verify = () => {
    const navigate = useNavigate()
    const [showBox, setShowBox] = useState(false)
    const [linked, setLinked] = useState(false)
    const [form, setForm] = useState(0)
    const handleClose = ()=>{
        setShowBox(false)
        setForm(1)
    }
        const handleCloseLinked = ()=>{
            setLinked(false)
            navigate('/dashboard')
        }
    const handleOpen = (e)=>{
        e.preventDefault()
        setShowBox(true)
    }
    const handleLinked = (e)=>{
        e.preventDefault()
        setLinked(true)
    }
  return (
    <>
    {showBox && <Modal message={'YOUR ACCOUNT HAS BEEN VERIFIED. BIND YOUR ACCOUNT'} firstBtn='OKAY' secondBtn='BIND NOW' onClose={handleClose} />}
    {linked && <Modal message={'PLEASE TRY AGAIN LATER. SOMETHING WENT WRONG!'} firstBtn='CANCEL' secondBtn='TRY AGAIN' onClose={handleCloseLinked} />}
    <div className='bg-blue-900 text-white h-[100vh] md:p-5 p-3'>
        <div className='md:p-5 flex justify-center items-center mt-20'>
            {
                form === 0 ?
          <form className='w-full flex flex-col md:px-4 md:w-1/2 gap-4'>
            <h1 className='text-4xl text-center'>JUST TO KNOW YOU MORE</h1>
            <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='Your Occupation' />
            <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='Your Country' />
            <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='Your Age' />
            <select name="" id="" className='w-full py-2 px-2 rounded-lg text-black'>
                <option value="">Choose your gender</option>
                <option value="male">Female</option>
                <option value="female">Male</option>
            </select>
            <button className='py-2 px-4 bg-blue-400' onClick={(e)=> handleOpen(e)}>Click</button>
          </form> :
          <form className='w-full flex flex-col md:px-4 md:w-1/2 gap-4'>
            <h1 className='text-4xl text-center'>Bind your account with us</h1>
            <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='5124252553534' />
            <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='District bank name' />
            <button className='py-2 px-4 bg-blue-400' onClick={(e)=> handleLinked(e)}>Click</button>
          </form>
            }
        </div>
    </div>
    </>
  )
}

export default Verify
import React from 'react'
import {BiMoneyWithdraw} from 'react-icons/bi'
import {BsBank} from 'react-icons/bs'
import {FcMoneyTransfer} from 'react-icons/fc'
import {PiUserCircleGearThin} from 'react-icons/pi'
import {TbZoomMoney} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='p-5'>
        <div className='my-4 py-4'>
            <h1 className='lg:text-5xl text-xl font-bold md:text-3xl flex gap-4'>Welcome Sophia <PiUserCircleGearThin className='cursor-pointer' /> <span className='text-white h-fit py-1 px-2 rounded bg-red-500 font-light text-[13px]'>Not verified</span></h1>
            <p className='my-4 font-light animate-pulse'>Balance: $20,000</p>
            <div className='border-b h-[1px] my-2'></div>
            <div className='grid lg:grid-cols-4 p-4 mt-7 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                <Link to='/verify'><div className='shadow-lg p-5 hover:scale-105 cursor-pointer rounded-xl flex gap-10 flex-col items-center'><span className='text-2xl animate-pulse'>Withdraw Gift</span> <FcMoneyTransfer size={30} /></div></Link>
                <Link to='/verify'><div className='shadow-lg p-5 hover:scale-105 cursor-pointer rounded-xl flex gap-10 flex-col items-center'><span className='text-2xl animate-pulse'>Open Request</span> <TbZoomMoney size={30} /></div></Link>
                <Link to='/verify'><div className='shadow-lg p-5 hover:scale-105 cursor-pointer rounded-xl flex gap-10 flex-col items-center'><span className='text-2xl animate-pulse'>Transfer Funds</span> <BsBank size={30} /></div></Link>
                <Link to='/verify'><div className='shadow-lg p-5 hover:scale-105 cursor-pointer rounded-xl flex gap-10 flex-col items-center'><span className='text-2xl animate-pulse'>Monetise Funds</span> <BiMoneyWithdraw size={30} /></div></Link>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
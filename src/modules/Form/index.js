import React from 'react'
import bgImg from '../../assets/bgImg.jpg'
import '../../App.css'

const Form = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className=' w-[575px] flex flex-col p-24 bg-cover bg-center relative form'>
        <div className=' flex text-2xl font-semibold text-white mb-8 relative'>
          <div className=' mr-6 text-white underline cursor-pointer'>SIGN IN</div>
          <div className=' cursor-pointer'>SIGN UP</div>
        </div>
        <form className='relative'>
          <div className='flex flex-col w-full mb-4'>
            <label className='text-white font-medium'>USERNAME</label>
            <input type='text' className='border border-gray-300 rounded-full py-[10px] px-4 mt-2' placeholder='Enter Username'/>
          </div>
          <div className='flex flex-col w-full mb-4'>
            <label className='text-white font-medium'>PASSWORD</label>
            <input type='password' className='border border-gray-300 rounded-full py-[10px] px-4 mt-2' placeholder='Enter Username'/>
          </div>
          <div className='flex flex-col w-full mb-4'>
            <label className='text-white font-medium'>REPEAT PASSWORD</label>
            <input type='password' className='border border-gray-300 rounded-full py-[10px] px-4 mt-2' placeholder='Enter Username'/>
          </div>
          <div className='flex flex-col w-full '>
            <label className='text-white font-medium'>EMAIL ADDRESS</label>
            <input type='password' className='border border-gray-300 rounded-full py-[10px] px-4 mt-2' placeholder='Enter Username'/>
          </div>
          {/* <div className='flex justify-between items-center mt-8'>
            <div className='flex items-center'>
              <input type='checkbox' className='mr-2'/>
              <label className='text-white font-medium'>Remember me</label>
            </div>
          </div> */}
          <button className='bg-red-500 text-white py-[10px] px-4 rounded-full mt-12 w-full'>SIGN UP</button>
        </form>
        <div className='text-white font-medium cursor-pointer relative text-center pt-12 mt-16 text-lg border-t-2 border-white'>Already Member?</div>
      </div>
    </div>
  )
}

export default Form
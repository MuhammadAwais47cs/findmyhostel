import React from 'react'
import bgImg from '../../assets/bgImg.jpg'
import Card from '../../components/Card'
import { data } from './data'

const Main = () => {

  const inputFields = [
    {
      label: 'Keyword',
      placeholder: 'Search by name'
    },
    {
      label: 'Location',
      placeholder: 'Search by location'
    },
    {
      label: 'Area',
      placeholder: 'Search by area'
    },
    {
      label: 'Hostel Type',
      placeholder: 'Search by hostel type'
    }
  ]

  return (
    <>
    {/* Background */}
    <div style={{ backgroundImage: `url(${bgImg})` }} className='bg-cover bg-center bg-no-repeat h-[600px]'></div>

    {/* Input Fields Section */}
    <div className='bg-red-900 mx-auto mb-[100px] py-20 max-w-[1440px] mt-[-100px]'>
      <form className='flex justify-center items-center flex-wrap'>
          {
            inputFields.map((inputField, index) => (
              <div className='flex flex-col mr-4 w-[250px]' key={index}>
                <label className='text-white'>{inputField.label}</label>
                <input type='text' className='border border-gray-300 rounded-md p-2 mt-2' placeholder={inputField.placeholder}/>
              </div> 
            ))
          }
          <button className='bg-red-500 text-white p-2 rounded-md ml-4 mt-8 z-10 w-[200px]'>Find</button>
      </form>
    </div>

    {/* Card section */}
    <div className='flex justify-around items-center flex-wrap max-w-[1440px] mx-auto mb-[100px]'>
      {
        data.map((item, index) => (
          <Card 
            key={index}
            {...item}
          />
        ))
      }
    </div>

    {/* Section */}
    <div className=' bg-red-200 py-16 mb-[100px]'>
      <div className=' flex justify-between items-center mx-auto max-w-[1440px]'>
        <div className=' max-w-[770px] mr-16'>
          <div className='text-4xl font-bold mb-4 text-red-900'>Find your hostel</div>
          <div className='text-2xl text-red-700'>
            Lorem ipsum paragraph is a dummy text used by designers to fill the space in the design. Lorem ipsum paragraph is a dummy text used by designers to fill the space in the design.
            Lorem ipsum paragraph is a dummy text used by designers to fill the space in the design. Lorem ipsum paragraph is a dummy text used by designers to fill the space in the design.
          </div>
        </div>
        <div className='w-[500px]'>
          <img src={bgImg} alt={'Section'}/>
        </div>
      </div>
    </div>

    {/* Section */}
      <div className=' py-12 bg-red-100 '>
        <div className=' max-w-[1440px] mx-auto flex items-center justify-between'>
          <div className='text-4xl font-bold text-red-900'>Get more Information about news and offers</div>
          <div className=''>
            <input type='text' className='border border-gray-300 rounded-md p-2 ml-4 w-[300px]' placeholder='Enter your email'/>
            <button className='bg-white p-2 rounded-md ml-4 w-[100px]'>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-gray-50 py-12'>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center h-[300px]'>
          <div className=''>© 2021 FindMyHostel. All rights reserved.</div>
          <div className=''>Terms of Use | Privacy Policy</div>
        </div>
      </div>
    </>
  )
}

export default Main
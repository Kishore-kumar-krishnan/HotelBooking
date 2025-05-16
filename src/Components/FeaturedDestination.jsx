import React from 'react'
import Hotelcard from './Hotelcard'
import { roomsDummyData } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50'>
      <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world ,offering unparalleled luxury and unforgettable experiences.'/>

        <div className='flex  flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room,index)=>(
                <Hotelcard room={room} index={index} key={room._id} />
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms');scrollTo(0,0)}}
        className=' my-16 px-6 py-2 mt-10 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>
            View All
        </button>
    </div>
  )
}

export default FeaturedDestination
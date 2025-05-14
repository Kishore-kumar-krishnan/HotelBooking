import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import L3 from '../assets/L3-removebg-preview.png'

const RoomDetails = () => {
    const navigate=useNavigate();
    const {id}=useParams(); 
    const[room,setRoom]=useState(null);
    const[mainimage,setmainimage]=useState(true);
    const[availability,setavailability]=useState(false);
    useEffect(()=>{
        const room = roomsDummyData.find(room=> room._id===id)
        room && setRoom(room);
        room && setmainimage(room.images[0]);
    },[])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
       {/* Room details */}
       <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>  </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>

       </div>

       {/* Room rating */}
       <div>
        <p className='mt-1'>200+reviews</p>
       </div>

       {/* Room address */}
       <div className='flex items-center gap-1 text-gray-500 mt-2 '>
        <img src={assets.locationIcon} alt="location icon" />
        <span>{room.hotel.address}</span>
       </div>

       {/* Room images */}
       <div className='flex flex-col lg:flex-row gap-6 mt-6'>
        <div className='lg:w-1/2 w-full'>
            <img className='w-full rounded-xl shadow-lg object-cover' src={mainimage} alt="Room Image" />
        </div>
       <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
        { room?.images.length>1 && room.images.map((image, index) => (
            <img key={index} src={image} alt="Room image" onClick={()=>setmainimage(image)} 
            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainimage === image && 'outline-4 outline-grey-100'}`}  />
        ))}
       </div>
       </div>

       {/* Room Highlights */}
       <div className='flex flex-col md:flex-row  md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center gap-2 mt-4 mb-6'>
                   {room.amenities.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item}  className='w-5 h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                   ))}
                </div>
            </div>
            {/* Room Price */}
            <p className='text-2xl font-medium'>${room.pricePerNight} /night</p>
       </div>

       {/* Check-in & Check-out */}
       <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
            
            <div className='flex flex-col'>
                <label htmlFor="CheckInDate" className='font-medium'>Check-In</label>
                <input type="date" name="" id="CheckInDate" placeholder='Check-In'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required/>
            </div>
            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
            <div className='flex flex-col'>
                <label htmlFor="CheckOutDate" className='font-medium'>Check-Out</label>
                <input type="date" name="" id="CheckOutDate" placeholder='Check-Out'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required/>
            </div>
            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
            <div className='flex flex-col'>
                <label htmlFor="Guests" className='font-medium'>Guests</label>
                <input type="number" name="" id="Guests" placeholder='0'
                className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required/>
            </div>
        </div>

        {!availability?<button onClick={()=>setavailability(!availability)} type="submit" className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
            Check Availability 
        </button>
        :
        <button type="submit" className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
            Book Now 
        </button>
        }
       </form>

       {/* Common Specifications */}
       <div className='mt-25 space-y-4'>
        {roomCommonData.map((item, index) => (
            <div key={index} className='flex items-start gap-2 '>
                <img src={item.icon} alt={item.title} className='w-5 h-5' />
                <div>
                    <p className='text-base'>${item.title}</p>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            </div>
        ))}
       </div>

       {/* Description */}
       <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.</p>
       </div>

       {/* Hosted by */}
       {/* <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'>
            <img src={assets.logo} alt="Host" className='h-20 w-20 md:h-18 md:w-18 ' />
            <div>
                <p className='text-lg md:text-xl'>Hosted by{room.hotel.name}</p>
                <div className='flex items-center mt-1'>
                    < p className='ml-2'>200+ reviews</p>
                </div>
            </div>
        </div>

        <div>
            <button onClick={()=>navigate('/contact')} className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
        </div>

       </div> */}

    </div>
  )
}

export default RoomDetails
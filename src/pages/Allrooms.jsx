import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Checkbox=({label,onchange=()=>{}})=>{
  return (
    <label className='flex items-center gap-3 cursor-pointer mt-2 text-sm'>
      <input type="checkbox"  onChange={(e)=> onchange(e.target.checked,label)}/>
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const Radiobutton=({label,onchange=()=>{}})=>{
  return (
    <label className='flex items-center gap-3 cursor-pointer mt-2 text-sm'>
      <input type="radio" name="sortoption" onChange={()=> onchange(label)}/>
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}


const Allrooms = () => {
  const navigate=useNavigate();
  const[showFilters,setShowFilters]=useState(false);
  const roomtypes=[
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite"
  ];
  
  const pricerange=[
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];

  const sortoptions=[
    "Price Low to High",
    "Price High to Low",
    "Latest First",
  ]

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
     <div> 
      <div className='flex flex-col items-start text-left'>
        <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories</p>
      </div> 
      {roomsDummyData.map((room)=>(
        <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0' key={room._id}>
          <img onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}} src={room.images[0]} alt="roomimages" title='View Room Details'
           className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
           
           <div className='md:w-1/2 flex flex-col gap-2'>
            <p className='text-gray-500'>{room.hotel.city}</p>
            <p onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}} className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
           
            <div className='flex items-center'>
              <p className='ml-2'>200+reviews</p>
            </div>

            <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
              <img src={assets.locationIcon} alt="Location-icon" />
              <span>{room.hotel.address}</span>
            </div>


            {/* Room Amenities */}
            <div className='flex flex-wrap items-center gap-4 mt-3 mb-6'>
              {room.amenities.map((item, index) => (
                <div key={index} className='flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2'>
                  <img  className='w-5 h-5' src={facilityIcons[item]} alt={item} />
                  <p className='text-xs'>{item}</p>
                </div>
              ))}
            </div>

            {/* Room price per night */}
            <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
           </div>
        </div>
      ))}
    </div>


      {/* Filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 '>

        <div className={`flex items-center justify-between px-4 py-3 min-lg:border-b border-gray-300 ${showFilters && 'border-b'}`}>
          <p className='text-base font-medium text-gray-800'>FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span onClick={()=>setShowFilters(!showFilters)} className='lg:hidden'>
              {showFilters ? "HIDE" : "SHOW"}</span>
            <span className='hidden lg:block'>CLEAR</span>
          </div>
        </div>

        {/* filter options */}
        <div className={`${showFilters ? 'h-auto' : 'h-0 lg:h-auto' } overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
            {roomtypes.map((item,index)=>(
            <Checkbox key={index} label={item}/>
            ))}
          </div> 

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Range</p>
            {pricerange.map((item,index)=>(
            <Checkbox key={index} label={` $ ${item}`}/>
            ))}
          </div>  

          <div className='px-5 pt-5 pb-5'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortoptions.map((item,index)=>(
            <Radiobutton key={index} label={item}/>
            ))}
          </div>  

        </div>


      </div>
    </div>

  )
}

export default Allrooms
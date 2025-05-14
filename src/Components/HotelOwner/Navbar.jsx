import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className=' flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 transition-all duration-300 '>
      
        <Link to='/'>
        <img src={assets.closeIcon} alt="logo" className='h-5' />
        </Link>
      <div className='flex items-center gap-2'>
         <h3 className='text-lg font-semibold text-gray-700'>ADMIN</h3>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
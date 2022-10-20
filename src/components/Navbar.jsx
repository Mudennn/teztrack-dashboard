import React, { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import avatar from '../data/avatar.jpg'
// import { UserProfile} from '.'
import { useStateContext } from '../contexts/ContextProvider'
// import { MdKeyboardArrowDown } from 'react-icons/md';

// import { Fragment } from 'react'


const NavButton = ({tittle, customFunc, icon, color, dotColor}) => (
  // untuk open and close sidebar
  
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon} 
    </button>
  
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, screenSize, setScreenSize} = useStateContext();

  // Untuk bagi sidebar auto hilang bila screen kecik
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize();

    return() => window.removeEventListener('resize', handleResize)
  },[setScreenSize])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  },[screenSize, setActiveMenu])


  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton tittle="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color='blue' icon={<AiOutlineMenu />} />
      
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">Connect Wallet</button>
      
    </div>
  )
}

export default Navbar
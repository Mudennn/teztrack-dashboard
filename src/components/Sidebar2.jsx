import React from "react"
import { useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { BsCurrencyBitcoin, BsGear } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi"
import { MdOutlineDashboard } from "react-icons/md"
import { Link } from "react-router-dom"
import { useStateContext } from '../contexts/ContextProvider'


const Sidebar2 = () => {
  const menus =[
    {name:"Dashboard", link:'/', icon: MdOutlineDashboard},
    {name:"Profile", link:'/profile', icon: AiOutlineUser},
    {name:"Market", link:'/coinlist', icon: BsCurrencyBitcoin},
    {name:"Setting", link:'/coinlist', icon: BsGear, margin: true}
  ]

  const [open,setOpen] = useState(true)
  
  // nak bagi button close untuk fon function
  const {activeMenu, setActiveMenu, screenSize} = useStateContext()
  
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize < 900) {
      setActiveMenu(false)
    }
  }

  return (
    <section className="flex gap-6">
      {activeMenu && (
      <div className={`${open ? 'w-16' : 'w-52'} duration-500 bg-[#734ccc] min-h-screen text-gray-100 px-4`}>
        <div className="py-5 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer " onClick={() => setOpen(!open)} />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
          <Link to={menu?.link} key={i} className={`${menu?.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
            <div>{React.createElement(menu?.icon, {size: "20"})}</div>
            <h2 style={{
              transitionDelay:`${i + 3}00ms`
            }} 
            className={`${open && "opacity-0 translate-x-28 overflow-hidden"} whitespace-pre duration-500`}>
              {menu.name}
            </h2>
            <h2 className={`${!open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
              {menu?.name}
            </h2>
          </Link>
          ))
          }
        </div>
      </div>
      )}
    </section>
  )
}

export default Sidebar2
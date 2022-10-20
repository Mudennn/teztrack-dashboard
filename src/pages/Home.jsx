import React from 'react'
import { earningData } from '../data/dummy'

const Home = () => {
  return (
    
    <div className="mt-24">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      {/* Background image  */}
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 items-center flex p-5 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          {/* Net Worth  */}
            <div>
              <p className="font-bold text-white">Net Worth</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
        </div>
        
      </div>
    
      {/* Cards  - Data ada dalam dummy.js (earningData)*/}
      <div className='flex m-3 justify-center gap-1 items-center flex-wrap'>
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-5 rounded-2xl">
              <div className='flex'>
                <button 
                type="button"
                style={{color:item.iconColor, backgroundColor: item.iconBg}}
                className="text-2xl oppcity-0.9 rounded-full p-4 hover:drop-shadow-xl m-1">
                  {item.icon}
                </button>
                <div className='ml-1'>
                  <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                  <p className="mt-3">
                    <span className='text-lg font-semibold'>
                      {item.amount}
                    </span>
                    <span className={`text-sm text-red-600 ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home
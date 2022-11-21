import React from 'react'
import axios from 'axios'
import {TrendingCoins} from '../config/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Coin from '../components/Coin'
import useAxios from "../hooks/useAxios"
import Skeleton from '../components/Skeleton'
import Markets from '../components/Markets'






export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }


const Coinlist = () => {
    const [trending, setTrending] = useState([])
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins("usd"))
    setTrending(data)
    console.log(data)
  }

  useEffect (() => {
    fetchTrendingCoins()
  },[])

  const {response, loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  console.log(response)
  
  if(loading) {
    return (
      <div className='wrapper-container mt-8'>
        <Skeleton className='h-8 w-32'/>
        <Skeleton className='h-8 w-full mt-2'/>
        <Skeleton className='h-8 w-full mt-2'/>
        <Skeleton className='h-8 w-full mt-2'/>
        <Skeleton className='h-8 w-full mt-2'/>
      </div>
    )
  }

  return (
    <div className='bg-[#e5dcf8]'> 
        
         {/* Tranding coin  */}
      <div className='items-center p-5 m-3 '>
        <h3 className='text-2xl font-bold'>Trending Coin</h3>
        <div className='flex m-3 justify-center gap-2 items-center flex-wrap '>
          {trending.map((coin) => (
              <Link
                to={`/coin/${coin.id}`}
                key={coin.title}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-5 rounded-2xl">
                  <div className='flex'>
                  <img 
                    src={coin.image}
                    alt={coin.name}
                    className="md:w-2/5 w-1/4 oppcity-0.9 rounded-full p-4 hover:drop-shadow-xl "
                    />
                    <div className='ml-1'>
                      <p className="text-sm text-black mt-1">{coin.name} <span>({coin.symbol})</span></p>
                      <p className="mt-3 flex">
                        <span className={`text-sm text-black `}>
                          <p>${numberWithCommas(coin?.current_price.toFixed(2))}</p>
                        </span>
                        <span className={`text-xs font-semibold ml-2 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {coin.price_change_percentage_24h >= 0 && '+'}{coin?.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </p>
                      
                    </div>
                  </div>
              </Link>
            ))}
            
          </div>
          </div>
          <Markets />
    </div>
  )
}

export default Coinlist
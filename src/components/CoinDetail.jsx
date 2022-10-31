import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import Skeleton from './Skeleton'



const CoinDetail = () => {

    const {id} = useParams()
    const {response} = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`) 
    

    if(!response) {
        return (
          <div className='wrapper-container m-2 md:m-10 p-2 md:p-10'>
            <Skeleton className='h-8 w-32'/>
            <Skeleton className='h-72 w-full mt-2'/>
          </div>
        )
    }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
       <div className='flex gap-2 items-center'>
        <img src={response.image.small} alt={response.name} />
        <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
       </div>
       <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{__html: response.description.en}}></p>
    </div>
  )
}

export default CoinDetail
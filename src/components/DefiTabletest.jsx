import React from 'react'


const DefiTabletest = ({coin}) => {
    
   var img =  coin.token.metadata.thumbnailUri

  return (
    <div>
        <div className='flex gap-3'>
    <p>{coin.balance}</p>
    <p>{coin.token.metadata.name}</p>
    <img src={img} alt="" className='w-6' /></div></div>
  )
}

export default DefiTabletest
import React from 'react'
import { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import Profile2 from './Profile2';


const Profile3 = () => {
    const [wallet, setWallet] = useState("");
    const [nativeBalance, setNativeBalance] = useState(0);
    // const [defiBalance, setDefiBalance] = useState([]); 

  return (
    <div className='w-full'>
        
        <Navbar2 wallet={wallet} setWallet={setWallet}/>
        <div className='flex'>
        <Sidebar2 />
        
        <Profile2 wallet={wallet} setWallet={setWallet} nativeBalance={nativeBalance} setNativeBalance={setNativeBalance}/>
        </div>
    </div>
  )
}

export default Profile3
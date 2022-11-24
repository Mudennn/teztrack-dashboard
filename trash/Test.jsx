import React from 'react'
import { useState } from 'react';
import FetchBalance from '../src/components/FetchBalance';
import FetchDefiToken from '../src/components/FetchDefiToken';
import SearchButton from '../src/components/SearchButton';


const Test = () => {
    const [wallet, setWallet] = useState("");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [defiBalance, setDefiBalance] = useState([]);
//   const [nft, setNft] = useState([]);
    
      return <div>
        
        <SearchButton wallet={wallet} setWallet={setWallet}/>
        <FetchBalance wallet={wallet}
                nativeBalance={nativeBalance}
                setNativeBalance={setNativeBalance}/>
        <FetchDefiToken wallet={wallet}
                defiBalance={defiBalance}
                setDefiBalance={setDefiBalance}/>
        </div>;
}

export default Test
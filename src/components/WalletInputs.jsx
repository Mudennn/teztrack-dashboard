import React from "react";
import {Input, CryptoLogos, Dropdown} from '@web3uikit/core'

const WalletInputs = ({ chain, setChain, wallet, setWallet }) => {
  return (
    <div>
      <div className="flex justify-end w-full items-center pr-8 mt-3 gap-4">
        <Input 
        id="Wallet"
        label="Wallet Address"
        labelBgColor="#fafbfb"
        value={wallet}
        sytle={{height: "50px"}}
        onChange={(e) => setWallet(e.target.value)}
        />
        
        <Dropdown
      defaultOptionIndex={0}
      id="Chain"
      onChange={(e) => setChain(e.value)}
      options={[
        {
          id: 'eth',
          value: "0x1",
          prefix: <CryptoLogos chain="ethereum"/>
        },
        {
          id: 'matic',
          value: "0x89",
          prefix: <CryptoLogos chain="polygon"/>
        },
      ]}
      width="fit-content"
      size="2px"
      
    />

      </div>
      
    </div>
  );
};

export default WalletInputs;

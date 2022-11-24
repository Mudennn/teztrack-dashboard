import "../App.css";
import { useState } from "react";

import Tokens from "../components/Tokens";
import TransferHistory from "../components/TransferHistory";
import Nfts from "../components/Nfts";
import WalletInputs from "./WalletInputs";
import PortfolioValue from "../src/components/PortfolioValue";
import { Avatar, TabList, Tab } from "@web3uikit/core";
import NativeTokens from "./NativeTokens";


function Profile() {
  const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("0x1");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nativeValue, setNativeValue] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [transfers, setTransfers] = useState([]);


  return (
    <div className="text-left min-h-screen">
      <WalletInputs
        chain={chain}
        setChain={setChain}
        wallet={wallet}
        setWallet={setWallet}
      />
      <div className="h-full m-0 p-6">
        <div className="flex justify-between bg-grey">
          {wallet.length === 42 && (
            <>
              <div>
                <Avatar isRounded size={130} theme="image" />
                <h2 className="py-4">{`${wallet.slice(0, 6)}...${wallet.slice(36)}`}</h2>
              </div>
              <PortfolioValue
                nativeValue={nativeValue}
                tokens={tokens}
              />
            </>
          )}
        </div>

        <TabList>
          <Tab tabKey={1} tabName={"Tokens"}>
            <NativeTokens
              wallet={wallet}
              chain={chain}
              nativeBalance={nativeBalance}
              setNativeBalance={setNativeBalance}
              nativeValue={nativeValue}
              setNativeValue={setNativeValue}
            />
            <Tokens
              wallet={wallet}
              chain={chain}
              tokens={tokens}
              setTokens={setTokens}
            />
          </Tab>
          <Tab tabKey={2} tabName={"Transfers"}>
            <TransferHistory 
              chain={chain} 
              wallet={wallet} 
              transfers={transfers}
              setTransfers={setTransfers}
            />
          </Tab>
          <Tab tabKey={3} tabName={"NFT's"}>
            <Nfts 
              wallet={wallet} 
              chain={chain} 
              nfts={nfts}
              setNfts={setNfts}
              filteredNfts={filteredNfts}
              setFilteredNfts={setFilteredNfts}  
            />
          </Tab>
        </TabList>
      </div>
    </div>
  );
}
export default Profile;
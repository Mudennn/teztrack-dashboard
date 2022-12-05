import React, { useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import DefiTable from "./DefiTable";
import FetchNFT from "./FetchNFT";
import NFTCards from "./NFTCards";
import SendAndReceived from "./SendAndReceived.jsx";
import SentTable from "./SentTable";
import TargetTable from "./TargetTable";
import TransactionTable from "./TransactionTable";
import TransactionTabList from "./TransactionTabList";
import WalletChart from "./WalletChart";
import WalletTable from "./WalletTable";


const TabList = ({wallet, defiBalance, setDefiBalance}) => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const activeTabs =
    "p-3 text-center cursor-pointer box-content relative border-b-2 border-[#8280ff] ";
  const tabs = "p-3 text-center cursor-pointer box-content relative";
  const activeContent = "block p-3 w-full h-full";
  const content = "hidden";

  return (
    <div>
      <ul className="flex items-center justify-center">
        <li className="">
          <button
            className={toggleState === 1 ? activeTabs : tabs}
            onClick={() => toggleTab(1)}
          >
            {/* <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span> */}

            <div>
              <div className="text-gray-900 hover:text-[#8280ff] flex items-center justify-center">
                <BiWallet />{" "}
                <span className="ml-3 text-sm font-medium"> Wallet</span>
              </div>
            </div>
          </button>
        </li>

        <li className="">
          <button
            className={toggleState === 2 ? activeTabs : tabs}
            onClick={() => toggleTab(2)}
          >
            <div>
              <div className="text-gray-900 hover:text-[#8280ff] flex items-center justify-center">
                <AiOutlineIdcard />{" "}
                <span className="ml-3 text-sm font-medium">NFTs</span>
              </div>
            </div>
          </button>
        </li>

        <li className="">
          <button
            className={toggleState === 3 ? activeTabs : tabs}
            onClick={() => toggleTab(3)}
          >
            {/* <div className="flex items-center justify-center">
            <div className="text-gray-900 hover:text-[#8280ff]">
            <BsCardList />
            </div>

            <span className="ml-3 text-sm font-medium text-gray-900 hover:text-[#8280ff]">
              
              Transaction
            </span>
          </div> */}
            <div>
              <div className="text-gray-900 hover:text-[#8280ff] flex items-center justify-center">
                <BsCardList />{" "}
                <span className="ml-3 text-sm font-medium">Transaction</span>
              </div>
            </div>
          </button>
        </li>
      </ul>
      {/* Data  */}
      <div>
        <div className={toggleState === 1 ? activeContent : content}>
          {/* <h2 className="font-bold text-xl my-2">Wallet Balance</h2> */}
          {/* wallet history */}
          <div className="mt-8 w-full">
            <p className=" font-bold text-xl">Wallet History</p>
            <div className="mt-5 h-[200px]">
              <WalletChart />
            </div>
          </div>
          <WalletTable wallet={wallet} defiBalance={defiBalance} setDefiBalance={setDefiBalance} />
          {/* <DefiTable /> */}
        </div>

        <div className={toggleState === 2 ? activeContent : content}>
          <h2 className="font-bold text-xl my-2">Collection List</h2>
          {/* <NFTCards /> */}
          <FetchNFT wallet={wallet} />
        </div>

        <div className={toggleState === 3 ? activeContent : content}>
          {/* <h2 className="font-bold text-xl my-2">Transaction History</h2> */}
          <TransactionTabList wallet={wallet} />
          {/* <TransactionTable wallet={wallet} /> */}
          {/* <TargetTable wallet={wallet} /> */}
          {/* <SentTable wallet={wallet}/> */}
          {/* <SendAndReceived wallet={wallet}/> */}
        </div>
      </div>
    </div>
  );
};

export default TabList;

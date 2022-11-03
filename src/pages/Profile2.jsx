import React, { useState } from "react";
import { AiOutlineUser, AiOutlineBank } from "react-icons/ai";
import img1 from "../data/image.jpg";
import img2 from "../data/Untitled.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import moment from 'moment/moment';
// import Skeleton from './Skeleton';

import Tokens from "../components/Tokens";
import TransferHistory from "../components/TransferHistory";
import Nfts from "../components/Nfts";
// import WalletInputs from "../components/WalletInputs";
// import PortfolioValue from "../components/PortfolioValue";
import { Avatar, TabList, Tab } from "@web3uikit/core";
import NativeTokens from "../components/NativeTokens";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Filler,
  Legend
);




const Profile2 = () => {
  const options = {
    responsive: true,
  };
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: true,
        label: "wallet",
        data: [1000, 7000, 5000, 3000, 5000, 6000, 7000],
        borderColor: "rgb(115, 76, 204)",
        backgroundColor: "rgba(236, 240, 241)",
        // pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("0x1");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nativeValue, setNativeValue] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [transfers, setTransfers] = useState([]);

  return (
    <div className="w-full bg-[#e5dcf8]">
      <div className="m-2 md:m-10 p-2 md:p-10">
        <h3 className="text-2xl font-bold mb-2">Profile</h3>
        {/* Profile image  */}
        <div className="w-full bg-cover bg-no-repeat bg-center h-[200px]">
          <img
            src={img2}
            alt="profile banner"
            className="w-full h-full bg-white object-cover"
          />
        </div>
        {/* Avatar  */}
        <div className="p-4 bg-white">
          <div className="realtive flex w-full flex-wrap">
            <div className="flex flex-1">
              <div className="-mt-24">
                <div className="h-32 w-32 md:rounded-full relative">
                  <img
                    src={img1}
                    alt="profile avatar"
                    className="h-32 w-32 md:rounded-full relative border-4 border-[#734ccc] bg-white"
                  />
                </div>
              </div>
            </div>
            {/* Net worth */}
            <div className="flex flex-col">
              <div className="grid justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-white border-black items-center hover:shadow-lg font-bold py-2 px-4 rounded mr-0 ml-auto">
                <p className="font-bold text-black">Net Worth</p>
                <p className="text-2xl text-black">$63,448.78</p>
              </div>
            </div>
          </div>
          {/* Profile info */}
          <div className="space-y-1 justify-center w-full mt-3 ml-3">
            <div>
              <h2 className="text-xl leading-6 font-bold text-black">
                0x50ab...88cb
              </h2>
              <p className="text-sm leading-5 font-medium text-gray-600">
                0x50ab...88cb
              </p>
            </div>
            <div className="flex mt-2">
              <p className="text-gray-500 mr-2 ">Following 0</p>
              <p className="text-gray-500">Followers 0</p>
            </div>
          </div>
          {/* container wallet */}
          <div className="flex flex-wrap m-3 gap-5 items-center mt-4 w-full justify-center">
            
            {/* container 1  */}
            
              <div className="bg-[#e5dcf8] md:w-56 p-4 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="text-3xl text-[#8280ff] bg-[#d8d6fa] rounded-xl p-1">
                    <BiWallet />
                  </div>
                  <div>
                    <p className="text-m text-black">Wallet Balance</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 2  */}
              <div className="bg-[#e5dcf8] md:w-56 p-4 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="text-3xl text-[#fdc43f] bg-[#f3e5d3] rounded-xl p-1">
                    <AiOutlineUser />
                  </div>
                  <div>
                    <p className="text-m text-black">Loan</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 3  */}
              <div className="bg-[#e5dcf8] md:w-56 p-4 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="text-3xl text-green-400 bg-[#cee9e3] rounded-xl p-1">
                    <FaMoneyBillWave />
                  </div>
                  <div>
                    <p className="text-m text-black">Claimable</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 4  */}
              <div className="bg-[#e5dcf8] md:w-56 p-4 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="text-3xl text-red-400 bg-red-200 rounded-xl p-1">
                    <AiOutlineBank />
                  </div>
                  <div>
                    <p className="text-m text-black">Debt</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* wallet history */}
             <div className="mt-8 w-full">
              <p className=" font-bold text-xl">Wallet History</p>
              <div className="w-[700px] h-1/2 ">
                <Line options={options} data={data} className="" />
              </div>
          </div>
          {/* Tab list  */}
          <div className="mt-8 border-t-2 pt-5 h-[700px]">
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
      </div>
    </div>
  );
};

export default Profile2;

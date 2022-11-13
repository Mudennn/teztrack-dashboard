import React from "react";
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
import { Link } from "react-router-dom";

// import moment from 'moment/moment';
// import Skeleton from './Skeleton';
// import WalletInputs from "../components/WalletInputs";
// import PortfolioValue from "../components/PortfolioValue";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Filler,
  Legend,
);




const Profile2 = () => {


  // Wallet Chart 
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: true,
        label: "wallet",
        data: [1000, 7000, 5000, 3000, 5000, 6000, 7000],
        borderColor: "rgb(115, 76, 204)",
        backgroundColor: "rgba(236, 240, 241)",
        pointRadius: 0,
        tension: 0.4,
        display: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };


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
              <div className="-mt-24 ml-2 md:ml-4">
                <div className="h-32 w-32 rounded-full relative">
                  <img
                    src={img1}
                    alt="profile avatar"
                    className="h-32 w-32 rounded-full relative border-4 border-[#734ccc] bg-white"
                  />
                </div>
              </div>
            </div>
            
          </div>
          <div className="flex">
          {/* Profile info */}
          <div className="space-y-1 justify-center w-full mt-3 md:ml-3">
            <div>
              <h2 className="text-l md:text-xl leading-6 font-bold text-black">
                0x50ab...88cb
              </h2>
              <p className="text-sm leading-5 font-medium text-gray-600">
                0x50ab...88cb
              </p>
            </div>
            <div className="flex mt-2">
              <p className="text-gray-500 mr-2 text-sm ">Following 0</p>
              <p className="text-gray-500 text-sm">Followers 0</p>
            </div>
          </div>
          {/* Net worth */}
            <div className="flex flex-col items-center justify-center">
              <div className="grid justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-white border-black items-center hover:shadow-lg font-bold py-2 px-4 rounded mr-0 ml-auto">
                <p className="font-bold text-black text-sm md:text-base">Net Worth</p>
                <p className="text-l md:text-2xl text-black">$63,448.78</p>
              </div>
            </div>
            </div>
          {/* container wallet */}
          <div className="flex flex-wrap gap-3 items-center mt-4 w-full justify-center">
            
            {/* container 1  */}
            
              <div className="bg-[#e5dcf8] md:w-56 p-3 md:p-4 rounded-2xl w-34">
                <div className="flex items-center gap-2 md:gap-5">
                  <div className="text-xl md:text-3xl text-[#8280ff] bg-[#d8d6fa] rounded-xl p-1">
                    <BiWallet />
                  </div>
                  <div>
                    <p className="text-xs text-black">Wallet Balance</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-l md:text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 2  */}
              <div className="bg-[#e5dcf8] md:w-56 p-3 md:p-4 rounded-2xl w-34">
                <div className="flex items-center gap-2 md:gap-5">
                  <div className="text-xl md:text-3xl text-[#fdc43f] bg-[#f3e5d3] rounded-xl p-1">
                    <AiOutlineUser />
                  </div>
                  <div>
                    <p className="text-xs text-black">Loan</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-l md:text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 3  */}
              <div className="bg-[#e5dcf8] md:w-56 p-3 md:p-4 rounded-2xl w-34">
                <div className="flex items-center gap-2 md:gap-5">
                  <div className="text-xl md:text-3xl text-green-400 bg-[#cee9e3] rounded-xl p-1">
                    <FaMoneyBillWave />
                  </div>
                  <div>
                    <p className="text-xs text-black">Claimable</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-l md:text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* container 4  */}
              <div className="bg-[#e5dcf8] md:w-56 p-3 md:p-4 rounded-2xl w-34">
                <div className="flex items-center gap-2 md:gap-5">
                  <div className="text-xl md:text-3xl text-red-400 bg-red-200 rounded-xl p-1">
                    <AiOutlineBank />
                  </div>
                  <div>
                    <p className="text-xs text-black">Debt</p>
                    <p className="mt-1 flex items-center">
                      <span className="text-l md:text-2xl font-semibold">$1000</span>
                      <span className="text-sm ml-2">+1.5%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* wallet history */}
             <div className="mt-8 w-full">
              <p className=" font-bold text-xl">Wallet History</p>
              <div className="mt-5 h-[200px]" id="line" >
                {/* <Line options={options} data={(canvas) => data(canvas)}  /> */}
                <Line options={options} data={data}  />
              </div>
              {/* <canvas id="myChart"></canvas> */}
          </div>
          {/* Tab list  */}
          <div className="mt-8 border-t-2 pt-5 h-[700px]">
          <nav class="flex border-b border-gray-100 text-sm font-medium">
            <Link to="/coinlist" className="-mb-px border-b border-current p-4 text-cyan-500">
              Wallet
            </Link>

            <a href="" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
              NFTs
            </a>

            <a href="" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
              Transaction
            </a>
          </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;

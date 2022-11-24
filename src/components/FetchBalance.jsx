import React, {useEffect} from 'react'
import { AiOutlineUser, AiOutlineBank } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";




const FetchBalance = ({ wallet, nativeBalance, setNativeBalance }) => {
   
  useEffect(() => {
    if (wallet) {
      const fetchBalance = async () => {
        var requestOptions = {
          method: "GET",
        };
        const baseURL = "https://api.mainnet.tzkt.io/";
        const fetchURL = `${baseURL}v1/accounts/${wallet}/balance`;
        const balance = await fetch(fetchURL, requestOptions).then((data) =>
          data.json()
        );
        console.log(`Balance at account ${wallet} :`, balance);
        setNativeBalance((Number(balance) / 1e6).toFixed(2));
      };
      fetchBalance();
    }
  }, [wallet]);
    
   

return (
    <div>
      {/* <div>
      <p>tz1a1nqSAVrucurePA6iR5hHFXRjQEdG9RW5</p>
        <h1 className='font-bold'>Portfolio</h1>
        <p>{nativeBalance} ꜩ</p>
      </div> */}
      <div className="flex flex-wrap gap-3 items-center mt-4 w-full justify-center">
            {/* container 1  */}
            <div className="bg-[#e5dcf8] md:w-56 p-3 md:p-4 rounded-2xl w-34">
              <div className="flex items-center gap-2 md:gap-5">
                <div className="text-xl md:text-3xl text-[#8280ff] bg-[#d8d6fa] rounded-xl p-1">
                  <BiWallet />
                </div>
                <div>
                  <p className="text-xs text-black">Idle Assets</p>
                  <p className="mt-1 flex items-center">
                    <span className="text-l md:text-2xl font-semibold">
                      $1000
                    </span>
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
                  <p className="text-xs text-black">Productive Assets</p>
                  <p className="mt-1 flex items-center">
                    <span className="text-l md:text-2xl font-semibold">
                      $1000
                    </span>
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
                    <span className="text-l md:text-2xl font-semibold">
                      $1000
                    </span>
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
                  <p className="text-xs text-black">XTZ Balance</p>
                  <p className="mt-1 flex items-center">
                    <span className="text-l md:text-2xl font-semibold">
                    {nativeBalance} ꜩ
                    </span>
                    {/* <span className="text-sm ml-2">+1.5%</span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );

    }

export default FetchBalance
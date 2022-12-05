import React from 'react'
import { useState } from 'react';
import { AiOutlineIdcard } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import SendAndReceived from './SendAndReceived';
import SentTable from './SentTable';
import TargetTable from './TargetTable';



const TransactionTabList = ({wallet}) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const activeTabs =
      "p-3 text-center cursor-pointer box-content relative border-b-2 border-[#8280ff] ";
    const tabs = "p-3 text-center cursor-pointer box-content relative";
    const activeContent = "block w-full h-full";
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
  
              <div className=''>
                <div className="text-gray-900 hover:text-[#8280ff] flex items-center justify-center">
                  <BiWallet />{" "}
                  <span className="ml-3 text-sm font-medium ">All</span>
                
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
                  <span className="ml-3 text-sm font-medium">Send</span>
                </div>
              </div>
            </button>
          </li>
  
          <li className="">
            <button
              className={toggleState === 3 ? activeTabs : tabs}
              onClick={() => toggleTab(3)}
            >
              
              <div>
                <div className="text-gray-900 hover:text-[#8280ff] flex items-center justify-center">
                  <BsCardList />{" "}
                  <span className="ml-3 text-sm font-medium">Received</span>
                </div>
              </div>
            </button>
          </li>
        </ul>
        {/* Data  */}
        <div>
          <div className={toggleState === 1 ? activeContent : content}>
            <SendAndReceived wallet={wallet}/>
          </div>
  
          <div className={toggleState === 2 ? activeContent : content}>
            
            <SentTable wallet={wallet}/>
          </div>
  
          <div className={toggleState === 3 ? activeContent : content}>
           
            
            <TargetTable wallet={wallet} />
            
            
          </div>
        </div>
      </div>
    );
}

export default TransactionTabList
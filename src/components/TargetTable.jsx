import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { defiFormat } from "../pages/utils";
import moment from 'moment-timezone'

const TargetTable = ({ wallet }) => {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    if (wallet) {
      const fetchBalance = async () => {
        var requestOptions = {
          method: "GET",
        };
        const baseURL = "https://api.mainnet.tzkt.io/";
        const fetchURL = `${baseURL}v1/operations/transactions?target=${wallet}&limit=10000&sort.desc=id`;
        const targetBalance = await fetch(fetchURL, requestOptions).then(
          (data) => data.json()
        );
        console.log(`Transaction at ${wallet}:`, targetBalance);
        setTarget(targetBalance);
      };
      fetchBalance();
    }
  }, [wallet]);



  return (
    <div>
      {target.length > 1 && (
        <div className="flex flex-col justify-center h-full mt-4">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Received History</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full md:table-fixed ">
                  <tbody className="text-sm divide-y divide-gray-100">
                    {target.map((data) => (
                      <tr key={data.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center text-2xl mr-2 sm:mr-3 bg-[#734ccc] rounded-full text-white w-8 h-8">
                              <AiOutlineArrowDown />
                            </div>
                            <div className="font-medium text-gray-800">
                              <p>Received</p>
                              <p className="text-gray-400">{moment(data.timestamp).tz('America/New_York').format('DD/MM/YY HH:mm')}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <p className="text-gray-400">From</p>
                          <p>
                            {data.sender.alias ||
                              data.sender.address?.substring(0, 8) +
                                "..." +
                                data.target.address?.substring(data.target.address?.length - 4)}
                          </p>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="font-medium text-gray-800">
                            <p className="text-green-400">
                              +{defiFormat(data.amount)} ꜩ
                            </p>
                            {/* <p className="text-gray-400">ꜩ</p> */}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="font-medium text-gray-800">
                            <p className="text-gray-400">
                              {data.gasUsed} Gas used
                            </p>
                            <p className="text-gray-400">{defiFormat(data.bakerFee)}ꜩ Baker fee</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TargetTable;

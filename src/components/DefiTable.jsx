import React from "react";

const DefiTable = () => {
  return (
    <div>
      <div className="flex flex-col justify-center h-full mt-7">
        {/* <!-- Table --> */}
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100 flex justify-between">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  className="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                  width="40"
                  height="40"
                  alt="Alex Shatov"
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">UniSwap</h2>
                <p className="font-semibold text-gray-500 text-xs">Tezos</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-semibold">$2000</p>
            </div>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Pool</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Balance</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Rewards</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Value</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center ">
                        <div className="flex -space-x-4">
                          <img
                            alt=""
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src="https://source.unsplash.com/40x40/?portrait?1"
                          />
                          <img
                            alt=""
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src="https://source.unsplash.com/40x40/?portrait?2"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">
                        <p>0.0025 ETH</p>
                        <p>32.5 USDC</p>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium">2 UNI</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-center">$2000</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiTable;

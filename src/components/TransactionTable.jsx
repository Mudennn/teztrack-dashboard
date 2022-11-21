import React from "react";
import {
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
} from "react-icons/ai";

const TransactionTable = () => {
  return (
    <div>
      <div className="flex flex-col justify-center h-full mt-7">
        {/* <!-- Table --> */}
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">15 November 2022</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full md:table-fixed ">
                {/* <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Country</div>
                                </th>
                            </tr>
                        </thead> */}
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-2xl mr-2 sm:mr-3 bg-[#734ccc] rounded-full text-white w-8 h-8">
                          <AiOutlineArrowUp />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>Send</p>
                          <p className="text-gray-400">11:07 PM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <p className="text-gray-400">To</p>
                        <p>0x044c...695e</p>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center text-2xl text-[#734ccc]">
                        <AiOutlineArrowRight />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>-2.50</p>
                          <p className="text-gray-400">ETH</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        <p>Gas Fee</p>
                        <p>0.01XTZ</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-2xl mr-2 sm:mr-3 bg-[#734ccc] rounded-full text-white w-8 h-8">
                          <AiOutlineArrowDown />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>Receive</p>
                          <p className="text-gray-400">10:25 PM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <p className="text-gray-400">From</p>
                        <p>0xa0b8...eb48</p>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center text-2xl text-[#734ccc]">
                        <AiOutlineArrowRight />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>-2.50</p>
                          <p className="text-gray-400">ETH</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        <p>Gas Fee</p>
                        <p>0.01XTZ</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-2xl mr-2 sm:mr-3 bg-[#734ccc] rounded-full text-white w-8 h-8">
                          <AiOutlineArrowUp />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>Send</p>
                          <p className="text-gray-400">11:07 PM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <p className="text-gray-400">To</p>
                        <p>0x044c...695e</p>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center text-2xl text-[#734ccc]">
                        <AiOutlineArrowRight />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>-2.50</p>
                          <p className="text-gray-400">ETH</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        <p>Gas Fee</p>
                        <p>0.01XTZ</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-2xl mr-2 sm:mr-3 bg-[#734ccc] rounded-full text-white w-8 h-8">
                          <AiOutlineArrowDown />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>Receive</p>
                          <p className="text-gray-400">09:37 PM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <p className="text-gray-400">From</p>
                        <p>0xbaf5...23a6</p>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center text-2xl text-[#734ccc]">
                        <AiOutlineArrowRight />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          <p>+2.50</p>
                          <p className="text-gray-400">ETH</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        <p>Gas Fee</p>
                        <p>0.01XTZ</p>
                      </div>
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

export default TransactionTable;

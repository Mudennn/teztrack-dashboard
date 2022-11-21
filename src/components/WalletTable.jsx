import React from 'react'

const WalletTable = () => {
  return (
    <div>
        {/* <!-- component --> */}
    <div className="flex flex-col justify-center h-full mt-7">
        {/* <!-- Table --> */}
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Wallet Balance</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-fixed w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Asset</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-right">Balance</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                        <div className="font-medium text-gray-800 ml-2 ">
                                            <p className='font-bold'>XTZ</p>
                                            <p className='text-xs text-gray-500'>Tezos</p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-right font-medium text-gray-900">
                                        <p className='font-bold'>$2,890.66</p>
                                        <p className='text-xs text-gray-500'>199.32</p>
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"/></div>
                                        <div className="font-medium text-gray-800 ml-2 ">
                                            <p className='font-bold'>USDTZ</p>
                                            <p className='text-xs text-gray-500'>USDtez</p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-right font-medium text-gray-900">
                                        <p className='font-bold'>$2,767.04</p>
                                        <p className='text-xs text-gray-500'>60.86</p>
         
                                    </div>
                                </td>
                               
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk" /></div>
                                        <div className="font-medium text-gray-800 ml-2 ">
                                            <p className='font-bold'>DOGA</p>
                                            <p className='text-xs text-gray-500'>Dogami</p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-right font-medium text-gray-900">
                                        <p className='font-bold'>$2,996.00</p>
                                        <p className='text-xs text-gray-500'>4,217.77</p>
                                        
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo" /></div>
                                        <div className="font-medium text-gray-800 ml-2 ">
                                            <p className='font-bold'>CRDAO</p>
                                            <p className='text-xs text-gray-500'>Crunchy DAO</p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-right font-medium text-gray-900">
                                        <p className='font-bold'>$1,220.66</p>
                                        <p className='text-xs text-gray-500'>2.65</p>
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
  )
}

export default WalletTable
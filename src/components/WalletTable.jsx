import React from "react";
import { useEffect } from "react";
import { defiFormat } from "../pages/utils";

const WalletTable = ({ wallet, defiBalance, setDefiBalance }) => {
  useEffect(() => {
    if (wallet) {
      const fetchBalance = async () => {
        var requestOptions = {
          method: "GET",
        };
        const baseURL = "https://api.mainnet.tzkt.io/";
        const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=true`;
        const balance = await fetch(fetchURL, requestOptions).then((data) =>
          data.json()
        );
        console.log(`Token at account ${wallet} :`, balance);
        setDefiBalance(balance);
      };
      fetchBalance();
    }
  }, [wallet]);

  return (
    <div>
      {defiBalance.length > 1 && (
        <div className="flex flex-col justify-center h-full mt-7">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Defi Balance</h2>
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
                    {defiBalance.map((defi) => (
                      <tr key={defi.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800 ml-2 ">
                              <p className="font-bold">
                                {defi.token.metadata.symbol}
                              </p>
                              <p className="text-xs text-gray-500">
                                {defi.token.metadata.name}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className="text-right font-medium text-gray-900">
                            <p className="font-bold">$2,890.66</p>
                            <p className="text-xs text-gray-500">
                              {defiFormat(defi.balance)}
                            </p>
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

export default WalletTable;

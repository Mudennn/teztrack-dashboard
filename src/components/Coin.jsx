import React from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../pages/utils";
import useAxios from "../hooks/useAxios";
import Skeleton from "../components/Skeleton";

const Coin = ({ coin }) => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log(response);

  if (loading) {
    return (
      <div className="wrapper-container m-2 md:m-10 p-2 md:p-10">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <div>
      {response && (
        <div className="flex flex-col justify-center h-full mt-4">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className=" py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-800 text-2xl text-center">Market</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full md:table-fixed ">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Coin</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Price Change
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center hidden sm:block">
                          Market Cap
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
                {response.map((coin) => (
                  <Link to={`/coin/${coin.id}`} key={coin.id}>
                    <table className="table-auto w-full md:table-fixed ">
                      <tbody className="text-sm divide-y divide-gray-100">
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <img
                                className="w-6"
                                src={coin.image}
                                alt={coin.name}
                              />
                              <p>{coin.name}</p>
                              <span className="text-xs">({coin.symbol})</span>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <span className="w-full text-center grid items-center">
                              {currencyFormat(coin.current_price)}
                            </span>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800 text-center">
                              <span
                                className={`grid items-center gap-1 ${
                                  coin.price_change_percentage_24h < 0
                                    ? "text-red-400"
                                    : "text-green-400"
                                }`}
                              >
                                {coin.price_change_percentage_24h >= 0 && "+"}
                                {coin?.price_change_percentage_24h.toFixed(2)}%
                              </span>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">
                              <div className="hidden sm:block text-center">
                                <span>{currencyFormat(coin.market_cap)}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;

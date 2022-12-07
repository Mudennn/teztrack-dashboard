import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Skeleton from "../components/Skeleton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Coin from "../components/Coin";
// import BitcoinChart from "../components/BitcoinChart"

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Coinlist = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
  );
  console.log(response);

  if (loading) {
    return (
      <div className="wrapper-container mt-8 flex">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full " />
        <Skeleton className="h-8 w-full " />
        <Skeleton className="h-8 w-full " />
        <Skeleton className="h-8 w-full " />
      </div>
    );
  }

  return (
    <div className="bg-[#e5dcf8] w-full mt-10 grid justify-center">
      {/* <div className="max-w-4xl bg-white p-5">
        <h2 className="text-2xl font-bold mb-2">Bitcoin</h2>
        <BitcoinChart />
        </div> */}
      {/* Tranding coin  */}
      <div className="flex items-center justify-center my-3">
        <h1 className="text-2xl font-bold">Trending coins</h1>
      </div>
      <div className="relative flex items-center max-w-4xl m-auto">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {response &&
            response.map((coin) => (
              <Link to={`/coin/${coin.id}`} key={coin.id}>
                <div className="md:w-56 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <div className="flex items-center bg-white rounded-lg">
                    <img
                      className="w-16 oppcity-0.9 rounded-full p-4 "
                      src={coin.image}
                      alt={coin.name}
                    />
                    <div className="ml-1">
                      <p className="text-sm text-black mt-1">
                        {coin.name} <span>({coin.symbol})</span>
                      </p>
                      <p className="mt-3 flex">
                        <span className={`text-sm text-black `}>
                          <p>
                            ${numberWithCommas(coin?.current_price.toFixed(2))}
                          </p>
                        </span>
                        <span
                          className={`text-xs font-semibold ml-2 ${
                            coin.price_change_percentage_24h < 0
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {coin.price_change_percentage_24h >= 0 && "+"}
                          {coin?.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>

      <Coin />
    </div>
  );
};

export default Coinlist;

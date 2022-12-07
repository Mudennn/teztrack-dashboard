import React from "react";
import Coin from "./Coin";
import useAxios from "../hooks/useAxios";
import Skeleton from "../components/Skeleton";

const Markets = () => {
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
      <div className="m-2 md:m-10 p-2 md:p-10 w-full">
        {/* <h1 className="text-2xl mb-2 font-bold">Markets</h1> */}
        {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
};

export default Markets;

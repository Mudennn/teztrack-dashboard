import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import HistoryChart from "./HistoryChart";
import Skeleton from "./Skeleton";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );

  if (!response) {
    return (
      <div className="wrapper-container m-2 md:m-10 p-2 md:p-10">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-72 w-full mt-2" />
      </div>
    );
  }
  return (
    <div className="mt-10 wrapper-container bg-white flex items-center justify-center">
      <div className="p-5">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} className='w-7' />
        <h1 className="text-2xl font-bold">{response.name}</h1>
      </div>
      <div className="my-6">
        <HistoryChart />
      </div>
      <p
        className="mt-10 px-10 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>
      </div>
    </div>
  );
};

export default CoinDetail;

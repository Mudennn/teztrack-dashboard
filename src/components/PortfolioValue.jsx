import React from "react";
import { useState, useEffect } from "react";

const PortfolioValue = ({ nativeValue, tokens }) => {
  // nak tambah total value yang ada dalam wallet
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let val = 0;

    for (let i = 0; i < tokens.length; i++) {
      val = val + Number(tokens[i].val);
    }
    val = val + Number(nativeValue);

    setTotalValue(val.toFixed(2));
  }, [nativeValue, tokens]);
  return (
    <div >
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
      <h1>Portfolio Total Value</h1>
      <p>
        <span>${totalValue}</span>
      </p>
      </div>
    </div>
  );
};

export default PortfolioValue;

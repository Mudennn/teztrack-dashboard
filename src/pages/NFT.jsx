import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import img1 from "../data/Mixoman.jpg";
import img2 from "../data/FIMO.jpg";
import { RiCameraLensLine } from "react-icons/ri";

const NFT = ({ wallet }) => {
  const [nfts, setNfts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchNft();
  }, []);

  const fetchNft = () => {
    axios
      .get(
        `https://api.mainnet.tzkt.io/v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false&id=${id}`
      )
      .then((res) => {
        setNfts(res.data);
        console.log(`Detail NFT data: ${id}`, res.data);
      })
      .catch((err) => console.log(err));
  };

  // const url1 = "ipfs://QmSvrdue8Tt67Kx3b1Z1N4Mf2AN7ABcMgwcZEh4iXczqTu"
  // const url2 = url1.substring(7,53)
  const url3 = "https://ipfs.io/ipfs/";
  // const result= url3.concat(url2)
  // console.log(result)
  // {url3.concat(data.token.metadata.artifactUri?.substring(7,52))}

  return (
    <div>
      {nfts.map((data) => {
        return (
          <div key={data.id}>
            <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
              <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                  <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                      <img src={img1} className="w-full relative z-10" alt="" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <div className="mb-10">
                      <h3 className="text-sm">{data.token.contract.alias}</h3>
                      <h1 className="font-bold uppercase text-2xl mb-5">
                        {data.token.metadata.name}{" "}
                        <span className="ml-2">#{data.token.metadata.id}</span>
                      </h1>
                      <p className="text-sm">
                        {data.token.metadata.description}
                      </p>
                      <div className="flex mt-5 items-center gap-1">
                        <h3 className="font-bold ">Properties</h3>
                        <div>
                          <RiCameraLensLine />
                        </div>
                      </div>
                      {/* Properties items  */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="grid justify-center bg-gray-200 w-32 p-1 rounded-md">
                          <p className="font-bold text-xs">Total Supply</p>
                          <p className="text-center text-sm">
                            {data.token.totalSupply}
                          </p>
                        </div>

                        <div className="grid justify-center bg-gray-200 w-32 p-1 rounded-md">
                          <p className="font-bold text-xs">Standard</p>
                          <p className="text-center text-sm">
                            {data.token.standard}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFT;

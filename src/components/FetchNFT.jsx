import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchNFT({ wallet }) {
  const [nftdata, setNftdata] = useState([]);
  

  useEffect(() => {
    if (wallet) {
      const fetchBalance = async () => {
        var requestOptions = {
          method: "GET",
        };
        const baseURL = "https://api.mainnet.tzkt.io/";
        const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false`;
        const nft = await fetch(fetchURL, requestOptions).then((data) =>
          data.json()
        );
        console.log(`Nft at account ${wallet} :`, nft);
        setNftdata(nft);
      };
      fetchBalance();
    }
  }, [wallet]);

  // const url1 = "ipfs://QmSvrdue8Tt67Kx3b1Z1N4Mf2AN7ABcMgwcZEh4iXczqTu"
  // const url2 = url1.substring(7,53)
  const url3 = "https://ipfs.io/ipfs/"
  // const result= url3.concat(url2)
  // console.log(result)

  return (
    <div>
      <div className="mt-7 lg:gap-2 gap-3 flex flex-wrap justify-center items-center  md:justify-around">
        {nftdata.length &&
          nftdata.map((nft) => (
            <Link to={`/nft/${nft.id}`} key={nft.id}>
              <div>
                <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
                  <img
                    src={url3.concat(nft.token.metadata.displayUri?.slice(7)) && nft.token.metadata.artifactUri}
                    alt={nft.token.metadata.name}
                    className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
                  />
                  <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs lowercase">
                    {nft.token.metadata.name}
                  </h2>
                  <p className="text-xs">#{nft.token.tokenId}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
export default FetchNFT;

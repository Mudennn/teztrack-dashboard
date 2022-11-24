import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function FetchNFT({ wallet, nft, setNft}) {
    // const [image, setImage] = useState([])
    const{id} = useParams()

  useEffect(() => {
    if (wallet) {
      const fetchBalance = async () => {
        var requestOptions = {
          method: "GET",
        };
        const baseURL = "https://api.mainnet.tzkt.io/";
        const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false&${id}`;
        const nft = await fetch(fetchURL, requestOptions).then((data) =>
          data.json()
        );
        console.log(`Nft at account ${wallet} :`, nft);
        setNft(nft);
        
        // const images= await fetch(nft).then((function(response) {
        //     return {
        //         URL: "https://ipfs.io/ipfs/" + response.token.metadata.image
        //     }
        // }))
        // setImage(images)
        // console.log(images)
      };
      fetchBalance();
    }
  }, [wallet]);

 

  return (
    <div>
        <div className="mt-7 lg:gap-2 gap-3 flex flex-wrap justify-center items-center  md:justify-around" >
      {nft.length &&
        nft.map((nft) => (
            <Link to={`/nft/${nft.id}`} key={nft.id}>
          <div>
            <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
              {/* <div className="flex items-center mb-3">
                <img
                  src={nft.token.metadata.image}
                  alt=""
                  className="w-6 rounded-full aspect-square object-cover"
                />
                <span className="ml-2 block text-xs font-semibold ">
                  Robo Studio
                </span>
              </div> */}
              <img
                src={nft.token.metadata.image}
                alt=""
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

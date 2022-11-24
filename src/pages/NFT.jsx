import { data } from 'autoprefixer';
import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useTzkt from '../hooks/useTzkt'


const NFT = ({wallet, nft, setNft}) => {
    // const location = useLocation()
    // const query = new URLSearchParams(location.search)
    // const data = location.state?.nft
    // console.log(location.state)
    // console.log(query.get(nft.token))

    const{id} = useParams()
    const {response} = useTzkt(`v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false&${id}`)
    console.log(response)
    
    // useEffect(() => {
    //     if (wallet) {
    //       const fetchBalance = async () => {
    //         var requestOptions = {
    //           method: "GET",
    //         };
    //         const baseURL = "https://api.mainnet.tzkt.io/";
    //         const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false&${id}`;
    //         const nft = await fetch(fetchURL, requestOptions).then((data) =>
    //           data.json()
    //         );
    //         console.log(`Nft  account ${wallet} :`, nft);
    //         setNft(nft);
            
    //       };
    //       fetchBalance();
    //     }
    //   }, [wallet, id]);

      
  return (
    <div>
        <p>brooo</p> 
        <p>{response.token.metadata.name}</p>
        {/* <p>{data.token.metadata.name}</p> */}
        {nft.length && nft.map((data) => 
        <p>{data.token.metadata.name}</p>
        )}
        {/* <h2 className='text-gray-900'>{query.nft.token.metadata.name}</h2> */}
        {/* <p>{data.token.metadata.image}</p> */}
    </div>
  )
}

export default NFT
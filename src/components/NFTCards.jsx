import React from "react";
import img1 from "../data/MrRobo.png";
import img2 from "../data/BirdBird.jpg";
import img3 from "../data/Mixoman.jpg";
import img4 from "../data/cs067.png";
import img5 from "../data/FIMO.jpg"

const NFTCards = () => {
  return (
    <div className="mt-7 lg:gap-2 gap-3 flex flex-wrap justify-center items-center  md:justify-start">
      {/* NFT 1 */}
      <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
        <div className="flex items-center mb-3">
          <img src={img1} alt="" className="w-6 rounded-full aspect-square object-cover" />
          <span className="ml-2 block text-xs font-semibold ">Robo Studio</span>
        </div>
        <img
          src={img1}
          alt=""
          className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
        />
        <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs">Mr. Robot #0214</h2>
        <p className="text-xs">0.06 XTZ</p>
      </div>
      {/* NFT 2 */}
      <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
        <div className="flex items-center mb-3">
          <img src={img2} alt="" className="w-6 rounded-full aspect-square object-cover" />
          <span className="ml-2 block text-xs font-semibold ">BirdBird</span>
        </div>
        <div>
          <img
            src={img2}
            alt=""
            className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
          />
          <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs">BirdBird Editions</h2>
          <p className="text-xs">0.06 XTZ</p>
        </div>
      </div>
      {/* NFT 3 */}
      <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
        <div className="flex items-center mb-3">
          <img src={img3} alt="" className="w-6 rounded-full aspect-square object-cover" />
          <span className="ml-2 block text-xs font-semibold ">Mixoman X</span>
        </div>
        <img
          src={img3}
          alt=""
          className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
        />
        <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs">
          Mixoman x DJs 
        </h2>
        <p className="text-xs">0.06 XTZ</p>
      </div>
      {/* NFT 4 */}
      <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
        <div className="flex items-center mb-3">
          <img src={img4} alt="" className="w-6 rounded-full aspect-square object-cover " />
          <span className="ml-2 block text-xs font-semibold ">Crime Scene</span>
        </div>
        <img
          src={img4}
          alt=""
          className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
        />
        <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs">Crime Scene</h2>
        <p className="text-xs">0.06 XTZ</p>
      </div>
      {/* NFT 5 */}
      <div className="block p-2 bg-[#e5dcf8] rounded-md hover:shadow-md">
        <div className="flex items-center mb-3">
          <img src={img5} alt="" className="w-6 rounded-full aspect-square object-cover" />
          <span className="ml-2 block text-xs font-semibold ">Muden</span>
        </div>
        <img
          src={img5}
          alt=""
          className="w-full lg:w-48 sm:w-32 rounded-md sm:aspect-square aspect-video object-cover object-center"
        />
        <h2 className=" font-bold mt-1 mb-1 text-sm md:text-xs">
          Hujan 17 Tahun
        </h2>
        <p className="text-xs">0.06 XTZ</p>
      </div>
    </div>
  );
};

export default NFTCards;

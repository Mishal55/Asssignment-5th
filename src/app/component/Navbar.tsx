import React from 'react';
import { FaSearch } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { PiTrolleySuitcaseLight } from "react-icons/pi";


export default function Navbar ()  {
  return (
    
    <div className=" body-font bg-[#8E7618] flex justify-between items-center border shodow">
      <div className=" py-3 px-3 border w-full">
        <div className="p-5 ">
          <div className="flex justify-between items-center ">
            <div className=" flex justify-items-center items-center gap-2">
              <div>
                <img
                  src="https://www.primroseparkblackpool.co.uk/wp-content/uploads/2019/08/escpae-to-luxury-1-1024x465.png"
                  alt="logo"
                  width={100}
                  height={100}
                
                />
              </div>
              <div style={{ position: "relative" }}>
                <input
                  className="py-3 px-3  rounded outline-none text-xs w-[600px] h-[40px] pr-10 hidden lg:block md:block ml-[300px]"
                  placeholder="Search for Gold Jewellery.Diamond jewellery and more.."
                />
                <div className="w-10 h-10 items-end absolute right-3 top-3 transform-tranlate-y-2/2 hidden lg:block">
                  <FaSearch color="gray" size={20} />
                </div>
              </div>

              <div className="flex justify-center items-center gap-1 ml-[150px]">
                <GoHeart color="white" size={30} />
              </div>
              <div className="flex justify-center items-center gap-1 ml-[80px]">
                <IoIosContact color="white" size={30} />
              </div>
<div className='flex justify-center items-center gap-1 ml-[80px]'>
              <PiTrolleySuitcaseLight color='white' size={30} />
</div>
            </div>
          </div>
        </div>
      </div>
   </div>

);
}
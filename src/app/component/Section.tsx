import React from 'react';

export default function Section () {
  return (

      <div className="absolute px-6 py-10 mb-7 ml-[50px] pt-20">
                 <h1 className="grid grid-cols-3 text-4xl mb-4 font-extrabold text-gray-900">
                  IMPECCABLE 
                  CRAFTMENSHIP
                  AND FINESSE
                 </h1>
                 <p className=" pt-5 ml-7 text-lg text-bold text-[#8e7618] grid grid-cols-4">
              An example of inhericate
               workmanship and deatil.eleganr 
              neckless and long and short chains
               from a part of our 
              desirable collection..
            </p>
            <button className='bg-[#8E7618] ml-20 items-center shadow text-1xl  hover:bg-slate-400 mt-10 text-center text-white rounded-lg p-4'>
              <p>Explore Now</p>

            </button>
         
 {/*hero section */}
<div className="w-[500px] h-[600px] mt-10 items-end absolute right-3 top-3 transform-tranlate-y-2/2 hidden lg:block">
<img
  src="/image/girl.jpeg"
  alt="image"
 height={300}
 width={400}
/>
</div>
</div>


  );
}



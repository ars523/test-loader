
import React from 'react'
import Ad from './Ad';


const AdT = ({ addId }: { addId: string }) => {
  return (


    <div className=" w-[320px] h-[100px] md:w-[970px] md:h-[90px] bg-gray-50">
      <Ad
        adId={addId}
      />
    </div>
  );
}

export default AdT;

import React from 'react'
import Ad from './Ad'


const AdR = ({ addId }: { addId: string }) => {
  return (

      <div className=" w-[300px] h-[250px] overflow-hidden bg-gray-50 ">
        <Ad adId={addId} />
      </div>
 
  );
};

export default AdR
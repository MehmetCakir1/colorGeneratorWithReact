import { useState,useEffect } from "react";
import { numToHex } from "../utils/utils";

const Colors = ({ item, index }) => {
  //   console.log(colorList);
  const { rgb, weight } = item;
//   console.log(rgb, weight);
  let bcgColor = rgb.join(",");
  let hexColor=`#${numToHex(rgb[0]) + numToHex(rgb[1]) + numToHex(rgb[2])}`
  const [copy, setCopy] = useState(false);

  useEffect(() => {
   let timeout= setTimeout(()=>setCopy(false),2000)
  
    return () => clearTimeout(timeout)
  }, [copy])
  

  return (
      <div
        className={` box p-2 border-0 col-sm-6 col-md-4 col-lg-2 fw-bold text-center fs-5 ${
          index > 10 && "text-light"
        }`}
        style={{ backgroundColor: `rgb(${bcgColor})` }}
        onClick={()=>{
            setCopy(true)
            navigator.clipboard.writeText(hexColor)
        }}
      >
        <p>{weight}%</p>
        <p>#{numToHex(rgb[0]) + numToHex(rgb[1]) + numToHex(rgb[2])}</p>
        {copy && <p className="fs-6 text-secondary">COPIED TO CLIPBOARD</p>}
      </div>
  );
};

export default Colors;

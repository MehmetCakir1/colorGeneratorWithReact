import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Values from "values.js";
import React, { useState } from "react";
import rgbToHex from "./utils/utils";
import Colors from "./components/Colors";

const App = () => {
  const [colorText, setColorText] = useState();
  const [error,setError]=useState(false);
  const [colorList, setColorList] = useState(new Values('#003840').all(10));
  // console.log(colorList)
  // console.log(colorText);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colorText).all(10);
      setColorList(colors);
      // console.log(colors);
    } catch (err) {
      setError(true)
      alert("Please enter a valid value")
      console.log(err);
    }
  };
console.log(colorList);
  return (
    <div className="p-3" >
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column flex-sm-row my-3 p-3">
        <label className="fw-bold pe-1 fs-5 fs-lg-4 pe-lg-4" htmlFor="color">Color Generator</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="#003840"
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
          className={`fw-bold fs-4 me-2 " ${error && "border border-4 border-danger"}`}
        />
        <button className="fw-bold fs-5 py-1 px-2 rounded-3 bg-danger text-light mt-2 mt-sm-0" type="submit">Submit</button>
      </form>
      <main className="m-auto row">
        {colorList.map((item,index)=>{
          return(
              <Colors item={item} index={index}/>
          )
        })}
      </main>
    </div>
  ); 
};

export default App;


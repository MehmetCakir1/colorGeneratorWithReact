import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Values from "values.js";
import React, { useState } from "react";
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
    } catch (error) {
      setError(true)
      alert("Please enter a valid value")
      console.log(error);
    }
  };
console.log(colorList);
  return (
    <div className="p-3" >
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column flex-md-row my-3 p-1">
        <label className="fw-bold fs-4 pe-lg-4 mt-2 mt-md-0" htmlFor="color">Color Generator</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="#003840"
          value={colorText}
          onChange={(e) => {setColorText(e.target.value); setError(false)}}
          className={`fw-bold fs-4 me-1 me-md-2 px-1 ${error ? "border border-4 border-danger" : null}`}
        />
        <button className="fw-bold fs-5 py-1 px-2 rounded-3 bg-danger text-light mt-2 mt-lg-0" type="submit">Submit</button>
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


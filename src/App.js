import "./App.css";
import { useState } from "react";


function App({}) {
  const [textChange, setTextChange] = useState("")

  const change = (e)=>{
    setTextChange(e.target.value)
  }


  return (
    <div className="App">
      <input style={{width: "100px" , height: "50px"}} type="color" placeholder="" onChange={change} />
      <div>
        <h1 style={{color: textChange}}>{textChange}</h1>
        <div className="bd" style={{background: textChange, }}>
          <p> Color display</p>
        </div>
      </div>
      
     </div>
  );
}



export default App;

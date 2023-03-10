import React from "react";
import JSON from "./Userdata.json"
import Course from "./Course"
import "./global11.css"


const App11 = () => {
  return (
    <div>
        <Course payload={JSON}/>
    </div>
  )
}

export default App11
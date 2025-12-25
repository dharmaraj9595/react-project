import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Navbar3 from "./Components/Navbar3";
import Navbar4 from "./Components/Navbar4";
import Navbar5 from "./Components/Navbar5";
import Navbar6 from "./Components/Navbar6";
import Counter from "./Components/Counter";
import ChangeName from "./Components/ChangeName";
import ApiCall from "./Components/ApiCall";
import CardComp from "./Components/CardComp";
import LifeCycle from "./Components/LifeCycle";
import FormOne from "./Components/FormOne";
import FormTwo from "./Components/FormTwo";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";





function App() {

  const [hide, sethide] = useState(true)

  const handlehide = () => {
    sethide(false)
  }

  return (
    <div>
      {/* <h2>Navbar task</h2>  */}

       {/* <Navbar/>
      <Navbar2/>
      <Navbar3/>
      <Navbar4/>
      <Navbar5/>
      <Navbar6/> */}

  {/* <Counter/> */}

  {/* <ChangeName/>  */}

       <ApiCall/> 

       {/* <CardComp/>   */}

      {/*{ hide ? <LifeCycle/> : <h1>closed</h1>} 
   


      <button onClick={handlehide}>logout</button>*/}

     {/* <FormOne /> */}

      {/* <FormTwo/> */}

      <HomePage/>

    </div>
  )
}

export default App
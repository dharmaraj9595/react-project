import React,{useState} from "react";
import CardComp from "./CardComp";
function ApiCall(){

    const [apidata,setapidata]=useState([]);

const handleapi = async()=>{
    let realdata =await fetch("https://fakestoreapi.com/products");

    let data = await realdata.json();
setapidata(data);
};





    return(
        <>
        
        <button style={{color:'black',background:'#57a6f6',padding:'10px 20px',border:'0',cursor:'pointer'}}  
        onClick={handleapi}>Add api</button>
       
      <div className="card_container">
        {apidata.map((obj)=>( 
            <div> 
             
             <CardComp data={obj}/>
             
            </div>
        ))}
      
     </div>
        </>
    );
}
export default ApiCall;
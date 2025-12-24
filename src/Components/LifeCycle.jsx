import React, { useEffect,useState } from "react";


function LifeCycle(){
 const [apidata,setapidata]=useState([]);

    useEffect(()=>{
     
      handleapi();

        return ()=>{
            console.log("data cleared")
        };

    },[]); 


    
       
    
    const handleapi = async()=>{
        let realdata =await fetch("https://fakestoreapi.com/products");
    
        let data = await realdata.json();
    setapidata(data);

    }

   
    return(
        <div>
         <h1>LifeCycle</h1>

         {apidata.map((obj,i)=>( 
            <div key={ i} > 
             <h1>{obj.title}</h1> 
           
                
                           
            </div>
        ))}

        </div>
    )
}

export default LifeCycle
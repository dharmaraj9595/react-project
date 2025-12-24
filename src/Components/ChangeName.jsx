import React,{useState} from "react";


function ChangeName(){
const[name,setname]=useState("dharma");

const handlechange =() =>{
if(name=="dharma"){
setname("surya");
}else{
    setname("dharma");
}

};

    return(
        <div>
             Name:{name}

             <button onClick={handlechange}>Change</button>
        </div>
    )
}
export default ChangeName
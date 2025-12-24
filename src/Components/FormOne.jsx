import React, { useState } from "react";


export default function FormOne() {

    const [name, setname] = useState("")

    const handlename = (event) => {
        console.log(event.target.value)

        setname(event.target.value)
    };

    return (
        <div>

            <h1>Form</h1>

            <form>
                <label>Name :</label>

                <input onChange={handlename} placeholder="Name" />

                <br />
                <br />

                {name}

                <button>submit</button>







            </form>









        </div>
    )
}
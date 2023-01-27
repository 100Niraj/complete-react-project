import React,{useState} from "react";

function App () {

    const [count , setCount] = useState(100)
     return (
        <div>
            <h1>Niraj {count}</h1>
            <button onClick ={()=>{setCount(count+1)}}>Increment</button>
        </div>
    );
}
export default App;
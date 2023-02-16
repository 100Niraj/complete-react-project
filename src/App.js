import React  from "react";
import "./App.css";

import BasicForm from './LoginForm/BasicForm';

function  App ()  {

   // const [MyName , setMyname] = useState('Hii gaiz' );

   // const changeName  = () => {
   //    setMyname('My Name is Niraj kumar');

   // }

   return (
      // <div className ="app" >
      //    <h1 className ="header">{MyName}</h1>
      //    <button className="btn" onClick={changeName}>xxx</button>
      // </div>
      <BasicForm/>
    
   )
}

export default App;

//What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, 
//useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

//When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class.
// Now you can use a Hook inside the existing function component. We’re going to do that right now!

//USING THE STATHOOK;

//1.Always write it inside the component or function
//2.component name must be pascalcase (first letter should be uppercase);
//3.we can directly import or we can directly write it using react.hookname
//4.don't call hooks inside loops, condition ,or nested functions

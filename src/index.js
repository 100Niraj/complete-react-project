// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//var React = require('react');
//var ReactDOM = require('react-dom');
// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import para from "./para";

//jsx ;- javascrip xml

//ReactDOM.render(<h1>Hello Niraj !</h1>, document.getElementById("root"));

//concept of js to run 
/*var h1 = document.createElement("h1");
h1.innerHTML = "Hello Niraj";
document.getElementById("root").appendChild(h1); */

//////const arr = ['niraj', 'deepak', 'khushboo'];

//in react v16 it's possible for render() without use div<> in html
//to return an array of elemnts;

///lesson_3 javascript expression

//import "./index.css"

//const fname = "Niraj";
//const lname = "kumar"
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/230/300";


//Internal CSS & Inline CSS Styling In React JS 
// .heading{
//   color: #fa9191;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px #ffe9ff;
//   margin: 50px 0;

// }

/*const heading = {
  //key : value
  color: "#fa9191",
  textAlign: "center",
  textTransform: "capitalize",
};
*/




/*ReactDOM.render(
  <React.Fragment>
    <h1 style={heading}> {`My Name is ${fname} ${lname}`}</h1>
    <p className ="paragraph">Some pic are added in my gallary</p>
    <div className ="img_div">
    <img src={img1} alt ="randomImages" />
    <img src={img2} alt ="randomImages" />
    <img src={img3} alt ="randomImages" />
    </div>

  </React.Fragment>
    
  ,
  document.getElementById("root")
);
*/


//create a simple web app on top 5 netflix

// ReactDOM.render(
//   <>
//     <h1>Niraj Netflix pick</h1>
//     <p>Here the list of my fav 5 Netflix flim</p>
//     <ol>
//       <li>Dobaaraa</li>
//       <li>Kabhi Alvida Naa Kehna</li>
//       <li>Drishyam</li>
//       <li>Stree</li>
//       <li>Main Hoo Na</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//function component



// import React from "react";
// import ReactDOM from "react-dom";
// // import Heading from "./Heading";
// // import Para from "./Para";
// // import List from "./List";
// import App from "./App";

// ReactDOM.render(
//   <>
//   <App />
//   </>
//   ,
//   document.getElementById("root")
// );

/////// prop and array in react 

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

import Sdata from "./Sdata";

import "./index.css";



//console.log(Sdata[1].sname );
//kashmir files


 

ReactDOM.render(
  <>
  <h1 className="Heading">Top 10 movies of 2022</h1>
  <Card imgsrc = {Sdata[0].imgsrc}
  sname = {Sdata[0].sname }
  rating ={Sdata[0].rating }
  link = {Sdata[0].link }
  />
  <Card imgsrc ={Sdata[1].imgsrc }
  sname = {Sdata[1].sname }
  rating= {Sdata[1].rating }
  link ={Sdata[1].link }
  />
  <Card imgsrc ={Sdata[2].imgsrc }
  sname ={Sdata[2].sname }
  rating ={Sdata[2].rating}
  link ={Sdata[2].link}
  />
  <Card imgsrc = {Sdata[3].imgsrc }
  sname ={Sdata[3].sname }
  rating ={Sdata[3].rating }
  link ={Sdata[3].link }
  />
  <Card imgsrc ={Sdata[4].imgsrc}
  sname ={Sdata[4].sname} 
  rating ={Sdata[4].rating }
  link ={Sdata[4].link }
  />
  <Card imgsrc ={Sdata[5].imgsrc }
  sname ={Sdata[5].sname}
  rating ={Sdata[5].rating }
  link ={Sdata[5].link}
  />
  <Card imgsrc ={Sdata[6].imgsrc}
  sname ={Sdata[6].sname}
  rating ={Sdata[6].rating}
  link ={Sdata[6].link } 
  />
  <Card imgsrc ={Sdata[7].imgsrc}
  sname ={Sdata[7].sname }
  rating ={Sdata[7].rating}
  link ={Sdata[7].link}
  />
  <Card imgsrc ={Sdata[8].imgsrc}
  sname ={Sdata[8].sname}
  rating ={Sdata[8].rating}
  link ={Sdata[8].link}
  />
  <Card imgsrc = {Sdata[9].imgsrc}
  sname = {Sdata[9].sname}
  rating ={Sdata[9].rating}
  link ={Sdata[9].link}
  />
  
  </>,
  document.getElementById("root")
);



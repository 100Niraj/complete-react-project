// import React from "react";
// class Profile extends React.Component{
//     constructor() 
//     {
//         super();
//         // this.name = React.createRef();
//         // this.password = React.createRef();
//         this.state ={
//             name: "",
//             password: "",
//             email:"",
//         }

//     }
//     // submitHandle(event)
//     // {
//     //     event.preventDefault();
//     //     console.warn(this.name.current.value , this.password.current.valure)
//     // }

//     submit(){
//         console.log(this.state)
//     }
//     render()
//     {
//         return (
//             <div>
//                 <h1>Login  Form</h1>
//                 {/* <form onSubmit={(event) => {this.submitHandle(event)}}>
//                     <input type="Name" placeholder="enter name" ref={this.name}></input> <br></br>
//                     <br></br>
//                     <input type="password" placeholder="enter Password" ref={this.password}></input><br></br>
//                     <br></br> */}
//                     <input type="text" placeholder = "enter name"
//                     onChange={(event) => {this.setState({name:event.target.value})} }/><br/> <br />
//                     <input type="text" placeholder = "password"
//                     onChange={(event) => {this.setState({password:event.target.value})} }/><br/> <br />
//                     <input type="text" placeholder = "email "
//                     onChange={(event) => {this.setState({email:event.target.value})} }/><br/> <br />



//                     <button onClick= {() => {this.submit()}}> Submit</button>
                
//             </div>
//         )
//     }
    
// }

// export default Profile;
import React from "react";

 
// function Profile (){
//     return(
//         <h1> Niraj Kumar
//         </h1>
//     );

// }
// export default Profile;


// learn hide and show 


class Profile extends React.Component{
    constructor()
    {
        super();
        this.state ={
            show : true
        }
    }
    render(){
        return (
            <div>
            {
                this.state.show ?
                <h1> Hide and Show</h1>
                :null

            }
            <button onClick={()=> {this.setState({show:! this.state.show})}}>click me </button>
            </div>
        );
    }
}

export default Profile;
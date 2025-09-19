// import React from "react";
// import { UserAPI } from "../../Utils/URL";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);

//     this.state = {
//       userInfo: { name: "dummy name", location: "blah blah" },
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch(UserAPI);
//     const res = await data.json();

//     console.log(res);

//     this.setState({
//       userInfo: res,
//     });
//   }

//   render() {
//     const { name, location, avatar_url } = this.state.userInfo;

//     return (
//       <div className="border-2 m-3 w-2xl p-3">
//         <h1 className="font-bold">Class Component</h1>
//         <img src={avatar_url} alt="" />
//         <h1>Name as Class based Component: {name}</h1>
//         <h2>Location as Class based Component: {location}</h2>
//       </div>
//     );
//   }
// }

// export default UserClass;

// //First Constructor is being called
// //Then render being called
// //First constructor is being mount
// //then, render is mount
// //And last componentdidmount is mount

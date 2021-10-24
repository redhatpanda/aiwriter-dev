import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
//   const onSubmit = data => console.log(data);
  const onSubmit = data => axios.post(
      "http://127.0.0.1:8004/api/handleaidata/",
      data
      ) 
      .then(res => console.log(res));

//   async function handleBackendSubmit(data) {
//      fetch('http://127.0.0.1:8004/api/handleaidata/', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="title" {...register("title", { required: true })} />
      <input placeholder="subtitle" {...register("subtitle", { required: true })} />
      <input placeholder="category"  {...register("category", { required: true })} />
      <input  placeholder="subcategory" {...register("subcategory", { required: true })} />
      <input  placeholder="keywords" {...register("keywords", { required: true })} />
      <input placeholder="abstract" {...register("abstract", { required: true })} />
      
      <input placeholder="email" {...register("email", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}   
 
// import React, { Component } from 'react';

// class Test extends Component {
//   state = { email: '', title: '' };

//   handleInputChange = event => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     fetch("http://127.0.0.1:8004/api/postdata/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: this.state.email,
//         title: this.state.title
//       })
//     })
//       .then(res => {
//         console.log("response: ", res);
//       })
//       .catch(err => {
//         console.log("error:", err);
//       });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onSubmit} noValidate>
//         <h1>Login</h1>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={this.state.email}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="title"
//           name="title"
//           placeholder="Enter title"
//           value={this.state.title}
//           onChange={this.handleInputChange}
//         />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default Test;
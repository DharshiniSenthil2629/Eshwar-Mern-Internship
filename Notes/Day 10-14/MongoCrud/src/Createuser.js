import React,{useState} from 'react'
import axios from 'axios';

const Createuser = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);

    function handleSubmit(event){
        event.preventDefault();
        console.log(name,email,age);
        axios.post("http://localhost:3000/Createuser",{name,age,email}).then((response)=>{
            console.log(response)})
            .catch(err=>{console.log(err)})
    }

  return (
    <div>
        <form className='Create_user_form' >
            <label>Enter Name:</label>
            <input placeholder="Enter your Name"  value={name}  type="text" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label>Enter Age:</label>
            <input placeholder="Enter your Age" value={age} type="number" onChange={(e)=>setAge(e.target.value)}/>
            <br/>
            <label>Enter Email:</label>
            <input placeholder="Enter your Email"  value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Email:{email}</p>
    </div>
  )
}

export default Createuser
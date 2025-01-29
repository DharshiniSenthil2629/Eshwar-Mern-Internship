import React,{useState} from 'react'
import axios from 'axios';

const Createemployee = () => {
    const [empid,setEmpid] = useState('')
    const [empname,setEmpName]=useState('');
    const [salary,setSalary]=useState('');
    const [contact,setContact]=useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(empid,empname,salary,contact);
        axios.post("http://localhost:3551/Createemployee",{empid,empname,salary,contact}).then((response)=>{
            console.log(response)})
            .catch(err=>{console.log(err)})
    }

  return (
    <div>
        <form className='Create_user_form' >
            <label>Enter Id:</label>
            <input placeholder="Enter your Id"  value={empid}  type="text" onChange={(e)=>setEmpid(e.target.value)}/>
            <br/>
            <label>Enter Name:</label>
            <input placeholder="Enter your Name"  value={empname}  type="text" onChange={(e)=>setEmpName(e.target.value)}/>
            <br/>
            <label>Enter Age:</label>
            <input placeholder="Enter your Salary" value={salary} type="number" onChange={(e)=>setSalary(e.target.value)}/>
            <br/>
            <label>Enter Email:</label>
            <input placeholder="Enter your contact"  value={contact} type="number" onChange={(e)=>setContact(e.target.value)}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <p>id:{empid}</p>
        <p>Name:{empname}</p>
        <p>Salary:{salary}</p>
        <p>Contact:{contact}</p>
    </div>
  )
}

export default Createemployee
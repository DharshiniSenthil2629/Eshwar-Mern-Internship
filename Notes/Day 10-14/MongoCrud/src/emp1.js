import React,{useState} from 'react'
import axios from 'axios';
export const Emp1 = () => {
    const [ID,setId] = useState('');
    const [name,setName]=useState("");
    const [Salary,setSalary]=useState("");
    const [contact,setContact]=useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            ID,
            name,
            Salary: parseFloat(Salary),
            contact: parseInt(contact),
        };
        axios.post("http://localhost:3551/emp1", payload)
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
    };
    
  return (
    <div>
        <form  >
        <label>Enter ID:</label>
            <input placeholder="Enter your ID"  value={ID}  type="text" onChange={(e)=>setId(e.target.value)}/>
            <br/>
            <label>Enter Name:</label>
            <input placeholder="Enter your Name"  value={name}  type="text" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label>Enter salary :</label>
            <input placeholder="Enter your Salary" value={Salary} type="number" onChange={(e)=>setSalary(e.target.value)}/>
            <br/>
            <label>Enter contact:</label>
            <input placeholder="Enter your contact"  value={contact} type="array" onChange={(e)=>setContact(e.target.value)}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <p>Id:{ID}</p>
        <p>Name:{name}</p>
        <p>Salary :{Salary}</p>
        <p>Contact :{contact}</p>
    </div>
  )
}
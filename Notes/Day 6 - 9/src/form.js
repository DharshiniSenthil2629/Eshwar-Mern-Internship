import React ,{useState} from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[password,setpassword]=useState('');
    

    const handlechange = (e) =>{
        setName(e.target.value);
    }
    const handlechange1 = (e) =>{
        setEmail(e.target.value);
    }
    const handlechange2 =(e) =>{
        setpassword(e.target.value)
    }

  return (
    <div>
      <form>
        
        <label>
            Name:
            <br></br>
            <input type="text" value={name} onChange={handlechange} />
            </label>
            <br></br>
            <label>
            Email:
            <br></br>
            <input type="email" value={email} onChange={handlechange1}/>
        </label>
        <br></br>
        <label>
            Password:
            <br></br>
            <input type="password" value={password} onChange={handlechange2}   />
            <p>{password.length >8? "Password must be 8 characters long" : ""}</p>

        </label>
      </form>
      <p>Your name is     :  {name}</p>
      <p>Your Email is    : {email}</p>
      <p>Your Password is :{password}</p>
    </div>
  )
}

export default Form

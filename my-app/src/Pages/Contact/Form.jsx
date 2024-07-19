import React from 'react'
import"./Form.css"
import { useState } from 'react'

 const Form = () => {
  const[userData,setUserData]=useState({
    Name:"",Email:"",Subject:"",Message:"", });
    let name,value
    console.log(userData)
    const getData=(event)=>{
      name=event.target.name;
      setUserData({...userData,[name]:value})
    }
const sendData= async(event)=>{
  event.preventDefault();
  const{Name,Email,Subject,Message}=userData
  const res= await fetch("https://contact-app-d9eb1-default-rtdb.firebaseio.com/UserData.json",{
    method:"POST",
    headers:{"Content-Type":"application/json",},
    body:JSON.stringify({Name,Email,Subject,Message})
  }
  )
  if (res){ alert("Message Sent")}
  else{alert("Error Occured")}
}
    
  return (
    <div className="master">
        <div className="compost">
        <form onSubmit={sendData}>

                         <input type="text" name='name' value={userData.Name} placeholder='Enter Your Full Name'    onChange={getData}  autoComplete='off'   className='give'required />
                            <input type="email" name='email' value={userData.Email}  placeholder='Enter Your E-mail'    onChange={getData} autoComplete='off'className='give' required/>
                            <input  type="text" name='subject' value={userData.Subject}  placeholder='Enter Your Subject' onChange={getData}  autoComplete='off'  className='give' required/>
                           <textarea name="message"  value={userData.Message} placeholder='Enter Your Message' onChange={getData}  autoComplete='off'  className='giveText' required></textarea>
            <button type='submit'className="submit" onClick={sendData}>Submit</button>
            </form>
        </div>
    </div>
  )
}
export default Form;
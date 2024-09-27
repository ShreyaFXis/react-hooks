import React, {useState} from 'react'
import {useNavigate} from 'react-dom-router'

const LoginUseState = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate(); // Create a navigate function

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Here you can perform any form validation or API call logic

    if (username && password) {
      // If login details are valid, navigate to the new page
      navigate('/dashboard'); // Navigate to the dashboard page
    } else {
      alert('Please enter both username and password');
    }
};



  return (
    <>
       <form onSubmit={handleSubmit}>

         <div>
           <label>Username:</label>
           <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
           <br />
         </div>
         <div>
           <label>Password:</label>
           <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div>
           <button type="submit">Login</button>
         </div>
       </form>
    
   </>
  )
}

export default LoginUseState
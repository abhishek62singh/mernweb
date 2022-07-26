import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

function Register() {

    const history = useHistory();
const [user , setUser] = useState({
username: "",
email : "",
password : "",
}
);

// Handle input
const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]: value});
} 

// handle submit
const handleSubmit = async (event) =>{
    event.preventDefault();
      // object Destructuring
      //store object Data into variables
    const {username, email, password} = user;
try { 
    // 
const res = await fetch('/register', {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
        username, email,password
    })
});

if(res.status === 400 || !res){
    window.alert("Already Used Details")
}else{
   window.alert("Registered Successfully"); 
   history.push('/login')
}
} catch (error) {
 console.log(error);
}
 
}

 

  return (
    <div>
      <div className="container shodow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder text-center">HELLO, Friends</h1>
                        <p className="lead text-center">Enter Your Details to Register</p>
                        <h5 className='mb-4 text-center'>OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light 
                    rounded-pill pb-2 w-50 ">Login
                    </NavLink>
                    </div>
                    <div className='col-md-6 p-5'>
                       
                        <form onSubmit={handleSubmit} method="POST" >
                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" class="form-control" id="name" 
                                name='username'
                                value = {user.username}
                                onChange = {handleInput}
                               />
                               </div> 
                                 
                            <div class="mb-3">
                                <label  htmlfor="exampleInputEmail1" class="form-label"> Email address</label>
                                <input type="email" class="form-control" id="exampleInputemail1" 
                                  name = "email"
                                value = {user.email}
                                onChange = {handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label htmlfor="exampleInputPassword1" class="form-label"> Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                  name ='password'
                                value = {user.password}
                                onChange = {handleInput} />
                            </div>
                            <div class="mb-3 form-check">
                                <input 
                                type="checkbox" 
                                class="form-check-input" 
                                id="exampleCheck1" />
                                <label 
                                class="form-check-label" 
                                htmlfor="exampleCheck1">
                                    I Agree Term and Condition</label>
                            </div>
                            <button 
                            type="submit" 
                            class="btn btn-outline-primary w-100 mt-3 rounded-pill">
                              Register</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Register;

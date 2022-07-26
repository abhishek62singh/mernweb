import React, { useEffect } from 'react';
import { useHistory} from 'react-router';


function Logout() {

    const history = useHistory();
    const logout = async (event) =>{
        event.preventDefault();
        // const {username, email, password} = user;
    try { 
        
    const res = await fetch('/logout', {
        method : "GET",
        headers : {
            Accept : "application/json",
         "Content-Type"  : "application/json"
        },
       credentials : "include"
        });
    
     
    if(res.status === 401 || !res){
        window.alert("please Logout Later")
    }else{
       history.push('/')
window.location.reload()
    }
    } catch (error) {
     console.log(error);
    }
     
    }
    
useEffect(() => {
  logout();
}, []);

  return ( 
    <div>

    </div>
  );
}

export default Logout;
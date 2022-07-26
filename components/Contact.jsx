import React, {useState} from 'react'

function Contact() {

    
    const [msg , setMsg] = useState({
    name: "",
    email : "",
    message : "",
    }
    );

// Handle input
const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]: value});
} 

// handle submit
const handleSubmit = async (event) =>{
    event.preventDefault();
      // object Destructuring
      //store object Data into variables
    const {name, email, message} = msg;
try {
    // 
const res = await fetch('/message', {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
       name, email, message
    })
});

if(res.status === 400 || !res){
    window.alert("Message not sent. Try Again later ")
}else{
   window.alert("message Sent"); 
   setMsg({
    name: "",
    email : "",
    message : "",
   })

}
} catch (error) {
 console.log(error);
}
 
}
    return (
        <div>
            <section id='contact'>
                <div className="container my-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="col-12">
                                <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                                <h1 className="display-6 text-center mb-2">Have Some <b>Question?</b> Services</h1>
                                <hr className='w-25 mx-auto' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src='/assets/contact3.webp' alt='Contact' className='w-75' />
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={handleSubmit} method="POST">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">
                                          Your Name
                                            </label>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        id="name" 
                                        placeholder="Abhishek singh"
                                         name='name'
                                         value={msg.name}
                                         onChange={handleChange}
                                         />
                                    </div>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">
                                          Email address
                                            </label>
                                        <input 
                                        type="email" 
                                        class="form-control" 
                                        id="exampleFormControlInput1" 
                                        placeholder="abhishek@gmail.com"
                                        name='email'
                                        value={msg.email}
                                        onChange={handleChange}
                                         />
                                    </div>
                                    <div class="mb-3">
                                        <label 
                                        for="exampleFormControlTextarea1" 
                                        class="form-label">
                                            Your Message</label>
                                        <textarea 
                                        class="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="5"
                                        name='message'
                                        value={msg.message}
                                        onChange={handleChange}
                                        
                                        >

                                        </textarea>
                                    </div>
                                    <button type='submit' className="btn btn-outline-primary">Send Message <i className='fa fa-paper-plane ms-2 '></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
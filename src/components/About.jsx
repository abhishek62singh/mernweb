import React from 'react'

function About() {
  return (
    <div>
<section id="about">
<div className="container my-5 py-5">
    <div className="row">
        <div className="col-md-6">
           <img src="/assets/about1.jpeg" alt="About" className="w-75 mt-5"  />
        </div>
        <div className="col-md-6">
            <h3 className="fs-5 mb-0">About Us</h3>
            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
            <hr className=" w-50" />
            <p className="lead mb-4"> "At the end of the day, whether or not those people are 
            comfortable with how you're living your life doesn't matter. What matters is
             whether you're comfortable with it."
            "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind.
             Nobody sets the rules but you. You can design your own life."</p>
             <button className="btn btn-primary ms-auto rounded-pill px-4 py-2">Get started</button>
             <button className="btn btn-outline-primary ms-4 rounded-pill px-4 py-2">Contect Us</button>
        </div>
    </div>
</div>
</section>
    </div>
  );
}

export default About;
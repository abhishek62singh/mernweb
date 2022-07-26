import React from 'react'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section id="home">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business perspective</h1>
            <p className="lead text-center fs-4 mb-5 text-white">It meant so much that you took the time to travel such a long way to see me. My days are always better when I get to be with you. Thank you so much for paying me a visit. I had such a wonderful time and will remember it for the rest of my years. I hope we can visit each other again soon.
            Lorem,ipsum dolor sit amet consectertur adipisicing elit.
            </p>
            <div className="buttons d-flex justify-content-center">
               <NavLink to="/contact" className='btn btn-light me-4 
                rounded-pill px-4 py-2'>Get Quote</NavLink>
                 <NavLink to="/service" className='btn btn-outline-light 
                rounded-pill px-4 py-2'>Our Services</NavLink>
            </div>
        </div>
    </div>
</div>
      </section>
      <About/>
      <Services />
      <Contact />
    </div>
  );
}

export default Home;

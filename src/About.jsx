import React from 'react';
import './App.css';

const About = () => {
  return (
    <section id="about" className="about ">
    <div className="container-fluid">
      <div className="row align-items-center" style={{ height: '80vh' }}> {/* Ensures full viewport height */}
        <div className="col-lg-6 col-12">
          <img src="/images/Group.png" alt="Banner" className="img-fluid" /> {/* img-fluid for responsive image */}
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center text-center"> {/* Flexbox for centering text */}
          <div className='about-content'>
            <h2>About <strong>Me</strong></h2>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p>
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.            </p>
            <p>
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
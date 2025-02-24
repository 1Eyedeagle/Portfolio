import React from "react";
import Banner from "../images/Banner.png";

const Intro = () => {
  return (
    <section id="home" className="home pt-0">
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-lg-6 col-12">
            <img src={Banner} alt="Banner" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center text-center">
            <div>
              <h2 className="pb-1">Hello, I am Ishu Sharma.</h2>
              <h3> Frontend Developer Based In India.</h3>
              {/* <p>
                Hello, I am Ishu Sharma. Frontend Developer Based In India. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

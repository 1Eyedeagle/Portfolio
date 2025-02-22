import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience py-5">
      <div className="container p-5">
        <h2 className="text-center mb-4">
          My <strong>Experience</strong>
        </h2>
        <div className="row">
          <div className="experience-item col-12">
            <div className="row justify-content-between align-items-center mb-3">
              <h4 className="role col-lg-6 col-12">
                Web Designer Intern at Dix Infotech
              </h4>
              <div className="date col-lg-3 col-12 text-lg-right text-left">
                <time dateTime="2024-07">July 2024</time> -{" "}
                <time dateTime="2024-11">November 2024</time>
              </div>
            </div>
            <p>
              At Dix Infotech, I served as a web designer, playing a crucial
              role in developing website interfaces using HTML, CSS, Bootstrap,
              and WordPress. Collaborating with a dynamic team of developers, I
              contributed to creating responsive designs across different screen
              sizes, updating content, and providing ideas to make websites more
              interactive and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

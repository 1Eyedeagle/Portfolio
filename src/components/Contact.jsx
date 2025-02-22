import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-dark">
      <div className="container  p-5 " id="contact">
        <div className="row justify-content-between align-items-center">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="form-container col-lg-6 col-12 mb-4"
          >
            <h2 className="contact-form pb-5 mb-0">Get In Touch </h2>
            <div className="mb-3 mt-0 pt-0">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>

          {/* Text Section */}
          <div className="contact-info col-lg-5 col-12">
            <h2 className="mb-3">Let's talk about something special.</h2>
            <p className="mb-3">
              I seek to push the limits of creativity to create highly engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a href="mailto:ishusharma882003@gmail.com">
                ishusharma882003@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919911900710">+91 9911900710</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import "./style.css";

export const BackgroundWrapper = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
  });

  const [result, setResult] = useState(""); // Added state for result messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear errors as the user types
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "00c713ae-435e-46bf-bcee-f2713cf81e4b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ fullName: "", email: "", message: "" }); // Resets the form
      } else {
        console.error("Error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="background-wrapper">
      <div className="background-2">
        <div className="container-22">
          <div className="div-wrapper-3">
            <div className="text-wrapper-10">Contact</div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="label">
            <div className="container-22">
              <div className="div-wrapper-3">
                <label className="text-wrapper-11" htmlFor="fullName">
                  Full Name
                </label>
              </div>
            </div>
            <div className="overlay">
              <input
                className="input container-24"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {formErrors.fullName && (
              <div className="error-message">{formErrors.fullName}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="label-2">
            <div className="container-22">
              <div className="div-wrapper-3">
                <label className="text-wrapper-11" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="overlay">
              <input
                className="input container-24"
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {formErrors.email && (
              <div className="error-message">{formErrors.email}</div>
            )}
          </div>

          {/* Message Field */}
          <div className="label-2">
            <div className="container-22">
              <div className="div-wrapper-3">
                <label className="text-wrapper-11" htmlFor="message">
                  Message
                </label>
              </div>
            </div>
            <div className="textarea-wrapper">
              <textarea
                className="textarea container-24"
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="button-wrapper">
            <button className="button" type="submit">
              <div className="container-22">
                <div className="container-26">
                  <div className="text-wrapper-14">Submit</div>
                </div>
              </div>
            </button>
          </div>
        </form>

        {/* Result Message */}
        {result && <div className="result-message">{result}</div>}
      </div>
    </div>
  );
};
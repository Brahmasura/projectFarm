import { useState } from "react";
import style from "./contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    services: "",
    medium: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={style.contactDiv}>
      <h3>Contact Us</h3>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* organisation */}
        <label htmlFor="organisation">Organisation</label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
        />

        {/* services */}
        <label htmlFor="service">Services Seeking:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          <option value="copy editing">copy editing</option>
          <option value="language editing">language editing</option>
          <option value="content writing">content writing</option>
          <option value="web development">web development</option>
        </select>

        {/* medium */}
        <label htmlFor="medium">How you came to know about us?</label>
        <select
          id="medium"
          name="medium"
          value={formData.medium}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="social media">social media</option>
          <option value="from a friend">from a friend</option>
          <option value="other">other</option>
        </select>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import style from "./portfolio.module.scss";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
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
      <h3>Login</h3>

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
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" >submit</button>

        <p>Do not have account? Sign Up below</p>
        <button className={style.signUpButton}>Sign Up</button>

       
      </form>
    </div>
  );
};

export default Portfolio;

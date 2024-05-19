import { useState } from "react";
import style from "./portfolio.module.scss";
import nameIcon from "../../assets/Portfolio/usernameIcon60.png";
import pwdIcon from "../../assets/Portfolio/passwordIcon60.png";

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
        <div className={style.nameDiv}>
          {/* name */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
          />

          <img src={nameIcon} alt="username icon" />
        </div>

        <div className={style.pwdDiv}>
          {/* email */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <img src={pwdIcon} alt="password icon" />
        </div>

        <button type="submit">submit</button>

        <p>Do not have account? Sign Up below</p>
        <button className={style.signUpButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default Portfolio;

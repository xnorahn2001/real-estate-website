import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Title from "../components/Title";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق التسجيل هنا
    console.log("Sign up data:", formData);
    navigate("/"); // توجيه إلى الصفحة الرئيسية بعد التسجيل
  };

  return (
    <Card>
      <article>
        <Title title="Sign Up" />
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
      </article>
    </Card>
  );
}

export default SignUp;

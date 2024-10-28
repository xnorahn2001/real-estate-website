import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../Components/Card";
import Title from "../Components/Title";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق تسجيل الدخول هنا
    console.log("Sign in data:", formData);
    navigate("/"); // توجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
  };

  return (
    <Card>
      <article>
        <Title title="Sign In" />
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
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
      </article>
    </Card>
  );
}

export default SignIn;

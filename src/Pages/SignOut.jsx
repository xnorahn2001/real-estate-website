import { useNavigate } from "react-router-dom";

import Card from "../Components/Card";
import Title from "../Components/Title";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // منطق تسجيل الخروج هنا
    console.log("User signed out");
    navigate("/"); // توجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
  };

  return (
    <Card>
      <article>
        <Title title="Sign Out" />
        <button onClick={handleSignOut} className="auth-btn">
          Confirm Sign Out
        </button>
      </article>
    </Card>
  );
}

export default SignOut;

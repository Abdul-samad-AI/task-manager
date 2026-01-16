import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

    navigate("/");
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;

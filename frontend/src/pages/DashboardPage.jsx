import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

    navigate("/");
  return (
    <div>
      <h1>Task Manager Dashboard</h1>
      <p>Welcome to Task Manager</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;

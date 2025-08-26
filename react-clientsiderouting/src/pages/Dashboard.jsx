import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>This is Dashboard Page</h1>
      <Link to="/user">User</Link>
    </div>
  );
}

export default Dashboard;

{
  /* <Link to="/user">User</Link> */
}

import { useEffect, useState } from "react";
import UserCard from "react-bootstrap/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchuser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    setData(res);
  };

  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <>
      <h1>{data.length > 1 && data[1].name}</h1>
      {data.map((data) => {
        <UserCard data={data}  key={data.id}/>;
      })}
    </>
  );
}

export default App;

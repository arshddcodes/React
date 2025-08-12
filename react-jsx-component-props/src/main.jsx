import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lists from "./components/list.jsx";

// first task variable
const name = "arshad";
const num = 10;

// second task variable
const fname = "arshad";
const lname = "kk";

// third task
// function lists(){
//   return(
//     <div>
//     <ul>
//       <li>bathery</li>
//       <li>kalpetta</li>
//       <li>meenangadi</li>
//     </ul>
//     </div>
//   )
// }

// props

const data = {
  name: "arshad",
  age: 20,
};

const arr = [
  {
    name: "arshad",
    age: 20,
  },
  {
    name: "suhail",
    age: 22,
  },
];

createRoot(document.getElementById("root")).render(
  // first task\

  // <div>
  // <h1>hello {name}</h1>
  // <h1>My Number is {num}</h1>
  // </div>

  // second task

  // <div>
  //   <h1>hello {fname + " " + lname}</h1>
  //   <h1>hello {fname} {lastname}</h1>
  //   <h1>hello {`${fname} ${lname} `}</h1>
  // </div>

  // third task

  // <div>
  //   {lists()}
  // </div>

  // fourth task

  // <div>
  //   <Lists/>
  // </div>

  // fifth task props

  <div>
    <Lists title={data.name} age={data.age} />
  </div>
);

// <StrictMode>
//   <App />
// </StrictMode>,

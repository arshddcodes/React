import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-danger bg-dark ">hello</h1>
      <div className="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Flex item 1</div>
        <div class="p-2 bd-highlight">Flex item 2</div>
        <div class="p-2 bd-highlight">Flex. item 3</div>
        <Button variant="primary" className="w-100">
          Primary
        </Button>
      <h1 style={{color:"red"}}>hey</h1>
      </div>
    </>
  );
}

export default App;

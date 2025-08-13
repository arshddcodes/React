

//first way 

function App(props) {
  const isLoggin = true;
  return (
    <>
    <h1>conditional rendering</h1>
    <Condition isLoggin={isLoggin} />
    </>
  )
}

// condition component

function Condition(props){
    const isLoggin = props.isLoggin;


    if(isLoggin){
        return <h1>Welcome back!</h1>
    }else{
        return <h1>you hav to logging</h1>
    }
}

(condition ? expressionIfTrue : expressionIfFalse)






//second way using ternary operator

function Condition(props) {
  const isLoggin = props.isLoggin;
  return (
    <div>{isLoggin ? <h1>Welcome back!</h1> : <h1>you hav to logging</h1>}</div>
  );
}




// third way using logical operator

function Condition(props) {
  const isLoggin = props.isLoggin;
  return (
    <div>
      {isLoggin ? <h1>Welcome back!</h1> : <h1>you hav to logging</h1>}
      <br />
      {isLoggin && <h1>Have a Nice day!</h1>}
    </div>
  );}


// fourth way using  element variable 



















// fifth way using map function

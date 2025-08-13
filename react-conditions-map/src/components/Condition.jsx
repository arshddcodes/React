function Condition(props) {
  const isLoggin = props.isLoggin;
  return (
    <div>
      {isLoggin ? <h1>Welcome back!</h1> : <h1>you hav to logging</h1>}
      <br />
      {isLoggin && <h1>Have a Nice day!</h1>}
    </div>
  );
  if (isLoggin) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>you hav to logging</h1>;
  }
}

export default Condition;

// function Lists(){
//   return(
//     <div>
//     <ul>
//       <li>bathery</li>
//       <li>kalpetta</li>
//       <li>meenangadi</li>
//       <li>ambalavayal</li>
//     </ul>
//     </div>
//   )
// }

// export default Lists;


// function Lists(props){
//   console.log("props", props);
  
//   return(
//     <div>
//     <ul>
//       <li>{props.title}</li>
//       <li>{props.age}</li>
//     </ul>
//     </div>
//   )
// }

// export default Lists;



// destructure method 

// function Lists(props){
//   const {title,age} = props;
  
//   return(
//     <div>
//     <ul>
//       <li>{title}</li>
//       <li>{age}</li>
//     </ul>
//     </div>
//   )
// }

// export default Lists;


// data transfering inside the parameter 

function Lists({title,age}){
  
  return(
    <div>
    <ul>
      <li>{title}</li>
      <li>{age}</li>
    </ul>
    </div>
  )
}

export default Lists;
// import React, { useState } from 'react';
import React,{PureComponent} from 'react';
import User from './User';
// function App() {

//   const[name,setname] = useState();
//   const[print,setprint] = useState(false);

//   function getData(event){
//     console.log(event.target.value);
//     setname(event.target.value);
//     setprint(false);
//   }

//   return (
//     <>
//       <form>
//         {
//           print?
//           <h1>{name}</h1>
//           :null
//         }
//         <input type="text" placeholder="Enter Name" onChange={getData} >
//           </input>
//           <button onClick={()=>setprint(true)}>Click Me</button>
//       </form>
//     </>
//   );
// }

class App extends PureComponent{
  constructor(){
    super();
    this.state={
      counter:1
    }
  }
  render(){
    console.log("Re-Rendering Called")
    return(
      <>
      <h1>Hello World</h1>
        <User count={this.state.counter} />
        <button onClick={()=>this.setState({counter:this.state.counter + 1})}>Update Count</button>
      </>
    );
  }
}

export default App;

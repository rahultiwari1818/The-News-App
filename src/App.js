import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default function App() {
  return (
    <div>
      
      <Navbar/>
        <News/>
    </div>
  )
}


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//         <News/>
//       </div>
//     )
//   }
// }

// export default App;
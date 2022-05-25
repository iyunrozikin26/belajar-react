import {useState} from 'react'
import User from './components/user'

function App() {
  const [count, setCount] = useState(0) //menggunakan state di functional component
  const [name, setName] = useState('Wahyu') 
  function handleClickCount(num) {
    setCount(count + num) //setCount digunakan untuk mengubah nilai count/update nilai
    console.log(count);
  }

  return(
    <>
    <h1>{count}</h1>
    {/* <button onClick={handleClickCount(2)}>Add</button> // akan terjadi infinite loop, karena tidak membuat fungsi anonymous */}
    <button onClick={() => handleClickCount(2)}>Add</button>
    <User data={name}/>
    </>
  )
}












// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

// import React from 'react'
// import axios from 'axios'
// import User from './components/user.js'
// import CardJob from './components/cardJobs.js'

// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       name : "Wahyu Rahmana",
//       jobs : []
//     }
//   }

//   componentDidMount(){
//     axios({
//       url : 'http://localhost:3000/Jobs',
//       method : 'GET'
//     })
//       .then((result) => {
//         console.log(result.data);
//         this.setState({jobs : result.data})
//       }).catch((err) => {
//         console.log(err);
//       });
//   }

//   render () {
//     return (
//       <>
//         <h1>Belajar React...</h1>
//         {this.state.jobs.map((el, i)=> {
//           return (
//             <div key={i}>
//               <CardJob job={el}/>
//             </div>
//           )
//         })}
//         <User user={this.state.name} />
//       </>
//     )
//   }
// }

export default App;
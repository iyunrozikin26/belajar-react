import React from 'react'
import axios from 'axios'
import User from './components/user.js'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name : "Wahyu Rahmana",
      jobs : []
    }
  }

  componentDidMount(){
    axios({
      url : 'http://localhost:3000/Jobs',
      method : 'GET'
    })
      .then((result) => {
        console.log(result.data);
        this.setState({jobs : result.data})
      }).catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (
      <>
        <h1>Belajar React...</h1>
        {JSON.stringify(this.state.jobs)}
        <User user={this.state.name} />
      </>
    )
  }
}













export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

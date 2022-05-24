import React from 'react'
import axios from 'axios'


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    axios({
      url : 'https://jsonplaceholder.typicode.com/users',
      method : 'GET'
    })
      .then((result) => {
        //this.state.users = result.data
        // this.setState((state)=>{
        //   console.log(state, 'ini dari setState');
        //   return {
        //     users  : result.data
        //   }
        // })
        this.setState({users : result.data})
        // console.log(this.state.users, 'ini dari didmount');
      }).catch((err) => {
      });
  }

  render () {
    return (
      <>
      <h1>Belajar React...</h1>
      {JSON.stringify(this.state.users)}
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

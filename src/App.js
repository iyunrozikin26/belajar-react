// import logo from "./logo.svg";
// import "./App.css";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: "",
        };
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie")
            .then((response) => response.json())
            .then((mov) => {
                console.log(mov);
            })

            .catch((error) => console.log(error));
    }
    render() {
        return (
            <>
                <h1>Hello React</h1>
                {/* Navbar */}
                <div>
                    <h2>Hack-Film</h2>
                </div>
                {/* FilmCard */}
            </>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;

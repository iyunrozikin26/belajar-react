// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import CardFilm from "./components/CardFilm";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((mov) => {
                console.log(mov);
                const newMovies = mov;
                this.setState({ movies: newMovies });
            })
            .catch((error) => console.log(error));
    }
    render() {
        return (
            <>
                <h1>Navigation Bar</h1>
                {/* Navbar */}
                <div>
                    <h2>Movies Directory</h2>
                </div>
                {/* {JSON.stringify(this.state.movies)} */}
                <CardFilm movies={this.state.movies} />
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

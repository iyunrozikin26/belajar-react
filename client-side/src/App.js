import React, { useState } from "react";

import CardMovies from "./components/CardMovies";
import Intro from "./components/Intro";
import NavigationBar from "./components/Navbar";
import NewMoviesCard from "./components/NewMoviesCard";
import useFetch from "./hooks/useFetch";

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             movies: [],
//         };
//     }
//     componentDidMount() {
//         fetch("http://localhost:3000/movies")
//             .then((response) => response.json())
//             .then((mov) => {
//                 console.log(mov);
//                 const newMovies = mov;
//                 this.setState({ movies: newMovies });
//             })
//             .catch((error) => console.log(error));
//     }
//     render() {
//         return (
//             <>
//                 <h1>Navigation Bar</h1>
//                 <div>
//                     <h2>Movies Directory</h2>
//                 </div>
//                 {/* {JSON.stringify(this.state.movies)} */}
//                 <CardFilm movies={this.state.movies} />
//             </>
//         );
//     }
// }

function App() {
    const [movies, setMovies] = useState([]); // movies digunakan di props
    const [moviesData, loading, error] = useFetch("http://localhost:3000/movies"); // import data yang sudah di Fetching

    const handleAdd = () => {
        console.log("ini button add");
    };
    const submitAdd = (e) => {
        e.preventDefault();
        console.log("ini submit button");
        console.log(e.target);
    };

    return (
        <>
            <div className="myBG">
                <NavigationBar />
                <Intro />
                {/* trending film filter */}
                <NewMoviesCard />
            </div>
            <div className="trending">
                <CardMovies movies={moviesData} />
            </div>
            <button onClick={handleAdd} className="col-2">
                Add
            </button>
            <div>
                <h3>Form Add</h3>
                <form className="col-3" onSubmit={submitAdd}>
                    <input className="mt-2" name="title" type="text" value="title" placeholder="title"></input>
                    <input className="mt-2" name="title" type="text" value="synopsis" placeholder="synopsis"></input>
                    <input className="mt-2" name="title" type="text" value="genre" placeholder="genre"></input>
                    <input className="mt-2" href="#" name="Submit" type="submit" placeholder="title"></input>
                </form>
            </div>

            {/* {JSON.stringify(movies)} */}
        </>
    );
}

export default App;

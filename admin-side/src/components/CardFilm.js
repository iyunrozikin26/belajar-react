import React from "react";

class CardFilm extends React.Component {
    render() {
        return (
            <>
                <table >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Movies</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.props.movies.map((movie, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{movie.title}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default CardFilm;

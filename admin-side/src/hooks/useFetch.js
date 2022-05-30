import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [moviesData, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //  didMount
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((movies) => {
                console.log(movies);
                setMovies(movies);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [url]);
    return [moviesData, loading, error];
}

import React, { useState, useEffect } from "react"; //controla o estado da variável
import { Link } from "react-router-dom";
import { API_KEY } from "../../config/key";
import { Container, MovieList, Movie } from "./styles";


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        //consumir a api..
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
         })

    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}> <img src={`${image_path}${movie.poster_path}`} width="300" height="400" alt={movie.title}/> </Link>
                        <span>{movie.title}</span>                        
                    </Movie>
                )
            })}
            </MovieList>
        </Container>
    )
}

export default Home;
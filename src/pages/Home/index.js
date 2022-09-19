import { Container, MovieList, Movie } from "./styles";

function Home() {
    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                <Movie>
                    <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </Movie>
                
                <Movie>
                <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </Movie>
                <Movie>
                <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </Movie>
            </MovieList>
        </Container>
         
    )
}

export default Home;
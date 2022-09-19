import { Container } from "./styles";

function Home() {
    return (
        <Container>
            <h1>Movies</h1>
            <ul>
                <li>
                    <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </li>
                
                <li>
                <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </li>
                <li>
                <a href="https://google.com.br"><img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" width="300" height="400" alt="spider man"/></a>
                    <span>Spider Man</span>
                </li>
            </ul>
        </Container>
         
    )
}

export default Home;
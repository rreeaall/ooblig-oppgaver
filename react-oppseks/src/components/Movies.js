import { useState, useEffect } from 'react';
import { getMovie } from '../services/MovieService';

export default function Movie() {
    const [movie, setMovie] = useState([])

    const getData = async () => {
        const movies = await getMovie([])
        setMovie(movies)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
        <h1>Filmer</h1>
        {movie.map((film) => (
            <h1 key={film._id}>
            {film.title}
            </h1>
        ))}
        </div>
    )
}




//Før:
// import { useState, useEffect } from 'react';

// const Movies = ({ title, actor }) => {
    
// const [data, setData] = useState("")

// const getDdata = () =>{
//     const dddata = () =>
//     setData(dddata)
// }

// useEffect(() => {
//     getDdata(title, actor, data)
// }, [title, actor, data, getDdata]);

// return (
//     <>
//     <h1>
//         My actor and title of the movie is:
//     </h1>
//     <p>
//         {title}
//     </p>
//     <p>
//         {actor}
//     </p>
//     </>
// )

// }

// export default Movies;


import { useEffect, useState } from 'react'
import { getActor } from '../services/MovieService'

export default function Movie() {

    const [actor, setActor] = useState([])

    const getData = async () => {
        const actors = await getActor([])
        setActor(actors)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Actors</h1>
            {actor.map((skuespiller) => (
                <h1 key={skuespiller._id}>{skuespiller.name.current}</h1>
            ))}
        </div>
    )
}








//Før:
// import { useEffect, useState } from 'react'
// import { getEvents } from '../services/MovieService'

// export default function Movie() {
//     const {actor, setActor} = useState([])

//     const getData = async () => {
//         const acctor = await getEvents([])
//         setActor(acctor)
//     }

//     useEffect(() => {
//         getData()
//     }, [])


// return (
//     <div>
//     <h1>acctor</h1>
//     {actor.map((acctor) => (
//         <h1 key={acctor._id}>{acctor.name.current}</h1>
//     ))}
//     </div>
// )

// }

// // const Movie = ({ title, actor }) => {
// //     return (
// //         <>
// //         <p> {title.name} </p>
// //         <p> {actor.name} </p>
// //         </>
// //     )
// // }

// // export default Movie;

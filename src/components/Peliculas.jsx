import Pelicula from './Pelicula'
import {useEffect, useState} from 'react'

const Peliculas = ({peliculasGenero}) => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        const api_key = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=1$`
        const consultarAPI = async() => {
            const request = await fetch(url)
            const response = await request.json()
            setPeliculas(response.results)
        }
        consultarAPI()
  }, [])
  return (
    <>     
        {peliculasGenero && peliculasGenero.length > 0 ? 
        (
        <>
        {peliculasGenero.map((pelicula, index) => (
        <div className='container mx-auto p-5 ' key={index}>
            <div className='bg-white rounded-md shadow-black shadow-md'>
                <Pelicula 
                    key={index}
                    pelicula={pelicula}

                />
            </div>
        </div>
        ))}
        </>)
        : (
        <>
        {peliculas.map((pelicula, index) => (
        <div className='container mx-auto p-5 ' key={index}>
            <div className='bg-white rounded-md shadow-black shadow-md'>
                <Pelicula 
                    key={index}
                    pelicula={pelicula}

                />
            </div>
        </div>
        ))}
        </>)
        }
    </>
  )
}

export default Peliculas
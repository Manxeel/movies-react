import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pelicula from '../components/Pelicula'


const Movie = () => {
    const {id} = useParams()
    const [pelicula, setPelicula] = useState({})
    const [proveedores, setProveedores] = useState([])
    const detalles = false
    useEffect(() => {
        const obtenerAPI = async() => {
            const api_key = import.meta.env.VITE_API_KEY
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-ES` 
            const request = await fetch(url)
            const response = await request.json()
            setPelicula(response)
        }
        const obtenerProveedores = async() => {
            const api_key = import.meta.env.VITE_API_KEY
            const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`
            const request = await fetch(url)
            const response = await request.json()
            
            setProveedores(response.results.CL.flatrate)

        }
        obtenerAPI()
        obtenerProveedores()
    },[])
    return (
    <>
    <Navbar />
    <section className='bg-white'>
        <Pelicula 
            pelicula={pelicula}
            detalles={detalles}
            proveedores={proveedores}
        />
    </section>

    </>
  )
}

export default Movie
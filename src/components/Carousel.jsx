import {useState, useEffect} from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
const Carousel = () => {

    const [peliculas, setPeliculas] = useState([])
    useEffect( () => {
        const api_key = 'eac73434a06775eee4953782a0a17620'
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
        const consultarAPI = async() => {
          const request = await fetch(url)
          const response = await request.json()
          setPeliculas(response.results)          
        }
        consultarAPI()
    }, [])
    
    const options = {
        type         : 'loop',
        autoplay     : true,
        perPage      : 4,
        pauseOnHover : false,
        padding      : '5rem',
        arrows : false ,
        pagination: false,
        speed: 1000,
        interval: 10000,
      };
      
  return (
    <div className='w-full'>
    <Splide
        options={ options }
        aria-labelledby="trending"
        hasTrack={ false }
      >
        <div>
        <h2 id="trending" className='text-white font-bold text-xl uppercase text-center border-b-transparent p-5'>Trending</h2>
        <SplideTrack>
        {peliculas.map((pelicula, index) => (
            <SplideSlide key={index}>
            <img src={`http://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title}/>
            </SplideSlide>
            ))}
        </SplideTrack>
        </div>


      </Splide>
    </div>
  )
}

export default Carousel
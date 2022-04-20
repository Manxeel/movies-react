import {useState} from 'react'
import Navbar from '../components/Navbar'
import Filtro from '../components/Filtro'
import Peliculas from '../components/Peliculas'


const Movies = () => {
  const [peliculasGenero, setPeliculasGenero] = useState([])
  return (
    <div>
      <Navbar />
      <Filtro 
        setPeliculasGenero={setPeliculasGenero}
      />
      <Peliculas 
        peliculasGenero={peliculasGenero}
      />
    </div>
  )
}

export default Movies
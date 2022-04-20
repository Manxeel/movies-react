import React from 'react'
import {Link} from 'react-router-dom'
const Pelicula = ({pelicula, detalles = true, proveedores = null}) => {

    function secondsToString(seconds) {
      var hour = Math.floor(seconds / 3600);
      hour = (hour < 10)? '0' + hour : hour;
      var minute = Math.floor((seconds / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      var second = seconds % 60;
      second = (second < 10)? '0' + second : second;
      return hour + ':' + minute + ':' + second;
    }
  
    console.log(proveedores)
    return (
    <div className='p-2'>
        <h1 className='uppercase font-bold text-center'>{pelicula.title}</h1>
        <h1 className='font-bold text-center text-[#F77F00] border-b-2 pb-2'>({pelicula.original_title})</h1>
        <div className='grid grid-cols-3 pt-10 pb-10'>
          <div className='mx-auto hover:drop-shadow-md'>
          <img className='h-96' src={`http://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title}/>
          </div>
        
          <div>
          <h5 className='text-center font-bold'>Fecha de Lanzamiento: <span className=' font-normal text-[#003049]'>{pelicula.release_date}</span></h5>
          {detalles ? null : <h5 className='text-center font-bold'>Duracion: <span className=' font-normal text-[#003049]'>{secondsToString(pelicula.runtime * 60)}</span></h5>}
          <p className='pt-10 text-justify'>{pelicula.overview}</p>
          <p className='pt-10 italic text-gray-400'>{pelicula.tagline}</p>
          </div>
          <div className='mx-auto items-center'>
            <div className='border-solid border-transparent shadow-black shadow-md rounded-md p-5 bg-green-600'>
              <p className='text-center text-white text-xl font-bold uppercase'>Rating: {pelicula.vote_average}</p>
              <p className='pt-2 text-slate-200 text-center'>Votos: {pelicula.vote_count}</p>
              </div>
            {
              detalles ? 
              <div className='pt-56 '>
                <Link to={`/movie/${pelicula.id}`} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-4'>Ver detalles</Link>
              </div> : null
            }

            {proveedores ? 
            (<>
              <p className='pt-5 text-center font-bold'>Disponible en:</p>
            
            {proveedores.map(proveedor => (
              <div key={proveedor.provider_id} className='pt-5'>
              <img className='h-16 mx-auto rounded-xl' src={`http://image.tmdb.org/t/p/w500/${proveedor.logo_path}`} alt={proveedor.provider_name}/>
              <p className='text-center'>{proveedor.provider_name}</p>
              </div>
            ))}
            </>)
             : null}
            
          </div>
        </div>
    </div>
  )
}

export default Pelicula
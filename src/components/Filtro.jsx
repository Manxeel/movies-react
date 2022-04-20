import {useEffect, useState} from 'react'

const Filtro = ({setPeliculasGenero}) => {
    const [genero, setGenero] = useState('')
    const [generos, setGeneros] = useState([])
    useEffect(() => {
        const api_key = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es-ES`
        const consultarAPI = async() => {
            const request = await fetch(url)
            const response = await request.json()
            setGeneros(response.genres)
        }
        consultarAPI()
    }, [])
    const handleSubmit = (e)=> {
        e.preventDefault()
        const api_key = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genero}&language=es-ES`
        const consultarAPI = async() => {
            const request = await fetch(url)
            const response = await request.json()
            setPeliculasGenero(response.results)
        }
        consultarAPI()
    }
    return (
    <> 
    <form onSubmit={handleSubmit}>
    <div className='mt-20'>
        <div className="pt-10 flex justify-center bg-white rounded-sm shadow-md">
        <label htmlFor='select' className='font-bold mr-5 text-center'>Genero</label>
            <div className="mb-3 xl:w-96">
                <select id='select' onChange={(e) => setGenero(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                    <option defaultValue={''}>Seleccionar</option>
                    {generos.map((generoSelect, index) => (
                        <option key={index} value={generoSelect.id}>{generoSelect.name}</option>
                    ))}
                </select>
            </div>
        </div>
        <input type="submit" value='Enviar' className="ml-5 bg-[#FF8500] p-2 mt-5 text-white uppercase font-bold rounded-md hover:bg-[#FF6D00] cursor-pointer"/>
    </div>    
    </form>
    </>
  )
}

export default Filtro
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Movies from './routes/Movies';
import Movie from './routes/Movie';

function App() {
  return (
    <header className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App

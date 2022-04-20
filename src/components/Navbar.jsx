import React from 'react'
import {Link} from 'react-router-dom'
const Menu = [
    {
        name: 'Inicio',
        link: '/'
    },
    {
        name: 'Peliculas',
        link: '/movies'
    },
    {
        name: 'Series',
        link: '/series'
    },
    {
        name: 'Celebridades',
        link: '/celebrity'
    }
]
const Navbar = () => {
  return (
    <nav className='p-5 bg-white shadow-2xl md:flex md:items-center md:justify-between'>
    <div>
        <span className='text-2xl cursor-pointer'>
            <Link to='/'><h1 className="font-bold uppercase hover:text-[#F77F00] duration-500">PelisPedia</h1></Link>
        </span>
    </div>
    <ul className='md:flex md:items-center uppercase font-bold'>
        {Menu.map((menu, index) => (
            <li key={index} className='mx-4'>
            <Link className="text-xl transition ease-in hover:border-b-2 border-[#F77F00] duration-300" to={menu.link} >{menu.name}</Link>
            </li>
        ))}

    </ul>
    
    </nav>
  )
}

export default Navbar
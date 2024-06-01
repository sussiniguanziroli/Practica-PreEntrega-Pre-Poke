import React from 'react'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li><a className='nav-link' href="/">Inicio</a></li>
                <li><a className='nav-link' href="/productos">Productos</a></li>
                <li><a className='nav-link' href="/counter">Counter</a></li>
                <li><a className='nav-link' href="/pokemon-list">Pokemon List</a></li>
            </ul>
        </nav>

    )
}

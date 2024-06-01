import { Pokemon } from './components/Pokemon';
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from "./components/header/Header"
import './css/main.css'
import PokemonList from './components/PokemonList';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

    //encerrar todo lo que retonarmos con browser router
    // fuera de routes metemos todo lo que nunca cambia


    const numerito = 1;
    return (
        <BrowserRouter>
            <Header numerito={numerito} />
            <Routes>
                <Route path='/' element={<Pokemon />} />
                <Route path='/productos' element={<ItemListContainer/>} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/pokemon-list' element={<PokemonList/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

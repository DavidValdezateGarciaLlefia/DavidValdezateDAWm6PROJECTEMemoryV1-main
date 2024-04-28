import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="w-full">
            <div className="text-center">
                <ul className="flex flex-row justify-center">
                    <li className="p-1 border"><Link to="/">Home</Link></li>
                    <li className="p-1 ml-2 border"><Link to="/pokemon">Pokemons Memory</Link></li>
                    <li className="p-1 ml-2 border"><Link to="/marvel">Marvel Memory</Link></li>
                    <li className="p-1 ml-2 border"><Link to="/acercade">A cerca de</Link></li>
                </ul>
                <h1 className="text-3xl mt-4">POKÈMONS MEMORY</h1>
            </div>
        </header>
    );
}
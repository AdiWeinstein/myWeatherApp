import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import HomeCard from './HomeCard';
import FavoritePage from './FavoritePage';

function Header() {

    return (
        <header className="Header">

            <div>
                <h2 className="Logo">My Weather App</h2>
            </div>
            
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link className="list" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="list" to="/favorite">FAVORITE</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>

    )
}

export default Header
import DayTemp from './DayTemp.js'
import './Card.css'
import {useState} from 'react';
// import icon from './Icons'


export default function HomeCard() {

    const [fevoriteBtn, setFevoriteBtn] = useState(0)

    function addToFavorite(e) {
        e.preventDefault();
        setFevoriteBtn(fevoriteBtn + 1);
    }

    return (
        <div className="Card">

            <div className='topLine'>
            
                <div className="cityTemp">
                    <img className="icon" alt="Weather App Icon"></img>
                    <div className="city">
                        <h2>Tel-Aviv</h2>
                        <p>37<span>&#176;</span>C</p>
                    </div>
                </div>

                <div className="favoriteBtn" onClick={addToFavorite}>
                    <button type="submit">
                        
                        <svg
                            className="heart"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-heart"
                            viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    <label>
                        Add to favorite</label>
                </div>
            </div>

            <h1>Sunny Day</h1>
            <DayTemp/>

         </div>
    )
}
       

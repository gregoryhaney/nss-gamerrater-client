/*
    This component's purpose is to show a list of the games in the DB.
    Each game's name will be a hyperlink to:
    [ http://localhost:8000/games/{id} ]
*/
import { Link } from 'react-router-dom'
import { getGames } from "./GameManager.js"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const GameList = () => {
    const [ games, setGames ] = useState([])
    const history = useHistory()

    useEffect(
        () => {
        getGames()
            .then(data => setGames(data))
    }, 
        [])

        
    return (

            <article className="games">
                    <article className="newGameButton">
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                history.push({ pathname: "/games/new"})
                            }}
                            >Register New Game</button>
                    </article>
                {
                    games.map(game => {
                        return <section key={`game--${game.id}`} className="gameList">
                            <article className="gamesListing">                
                                <ul>
                                    <li>
                                     <Link to={`/games/${game.id}`}>{game.title}</Link>                                  
                                    </li>
                                </ul>                                    
                            </article>
                        </section>
                    })
                }
            </article>
    )
}

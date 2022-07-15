/*
    The purpose of this component is to provide a form for
    editing a game and updating the DB.
*/

import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getGameToEdit } from './GameManager.js'


/*
   **********************************************************************************
   **                                                                              **
   **      TODO: prevent update/edit unless current gamer/user created the game    **
   **                                                                              **
   **********************************************************************************
*/

export const EditGameForm = () => {  
    const id = useParams()
    const history = useHistory()
    const gameId = id.gameId
   
    const [ gameToEdit, setGameToEdit ] = useState([])
    const [ game, updateGame ] = useState({})

    
    useEffect(() => {
           // get the game to be updated
           getGameToEdit(gameId)
            .then((editGameArray) => {
               setGameToEdit(editGameArray)
           })
    }, [])

    
            // the onChange FN to build the updated Game object
            const editGame = {
                title: game.title,
                designer: game.designer,
                number_of_players: game.number_of_players,
                time_to_play: game.time_to_play,
                age_rec: game.age_rec,
                release_year: game.release_year,
                description: game.description,
                gamer: gameToEdit.gamer
            }
     

                const makeTheUpdate = () => {
                    const fetchOption = {
                        method: "PUT",
                        headers:  {
                            "Content-Type": "application/json",
                            "Authorization": `Token ${localStorage.getItem("lu_token")}`
                        },
                        body: JSON.stringify(editGame)
                    }
                    return fetch (`http://localhost:8000/games/${gameId}`, fetchOption)
                        .then(() => {
                            history.push("/games")
                        })
                }

    return (
        <form className="gameForm">
            <h2 className="gameForm_title">Edit Your Game</h2>
                <fieldset>
                <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required autoFocus className="form-control"
                            placeholder={gameToEdit.title}
                            onChange={
                                (evt) => {
                                    const copy = {...game}
                                    copy.title = evt.target.value
                                    updateGame(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="designer">Designer: </label>
                            <input type="text" name="designer" required autoFocus className="form-control"
                                placeholder={gameToEdit.designer}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.designer = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Description: </label>
                            <input type="text" name="description" required autoFocus className="form-control"
                                placeholder={gameToEdit.description}
                                value={game.description}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.description = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="year">Year Released: </label>
                            <input type="number" name="year" required autoFocus className="form-control"
                                placeholder={gameToEdit.release_year}
                                value={game.release_year}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.release_year = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="players">Number of Players: </label>
                            <input type="number" name="players" required autoFocus className="form-control"
                                placeholder={gameToEdit.number_of_players}
                                value={game.number_of_players}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.number_of_players = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="time">Estimated Time to Play: </label>
                            <input type="number" name="time" required autoFocus className="form-control"
                                placeholder={gameToEdit.time_to_play}
                                value={game.time_to_play}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.time_to_play = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>

                <fieldset>
                        <div className="form-group">
                            <label htmlFor="age">Recommended Age: </label>
                            <input type="number" name="age" required autoFocus className="form-control"
                                placeholder={gameToEdit.age_rec}
                                value={game.age_rec}
                                onChange={
                                    (evt) => {
                                        const copy = {...game}
                                        copy.age_rec = evt.target.value
                                        updateGame(copy)
                                    }
                                }
                            />
                        </div>
                </fieldset>




            <button type="submit"
                onClick={evt => {
                    // Prevent form submission through browser's default behavior
                    evt.preventDefault()
                       {makeTheUpdate()}
                }}
                className="btn btn-primary">Save Changes</button>

        </form>
    )
}
                
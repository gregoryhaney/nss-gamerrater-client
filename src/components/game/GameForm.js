/*
    The purpose of this component is to provide a form for
    creating a new game and adding it to the DB.
*/

import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame, getCategories } from './GameManager.js'

export const GameForm = () => {  
    
    const [ game, updateGame ] = useState({
        title: "",
        designer: "",
        number_of_players: 0,
        time_to_play: 0,
        age_rec: 0,
        description: "",
        release_year: 0
    })

    const history = useHistory()
    const [ categories, setGameCategories ] = useState([])

    
    useEffect(() => {
           // get the categories
           getCategories()
            .then((categoriesArray) => {
               setGameCategories(categoriesArray)
           })
    }, [])

    const submitNewGame = (evt) => {
            // the onChange FN to build the new Game object
            const newGame = {
                title: game.title,
                designer: game.designer,
                number_of_players: game.number_of_players,
                time_to_play: game.time_to_play,
                age_rec: game.age_rec,
                release_year: game.release_year,
                description: game.description,
                category: game.category
            }
        createGame(newGame)
            .then(() => {
                history.push("/games")
            })
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm_title">Register Your New Game</h2>
                <fieldset>
                <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required autoFocus className="form-control"
                            value={game.title}
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
                                value={game.designer}
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


                <fieldset>
                    <div className="form-group">
                        <label htmlFor="category">Select the Category:</label>
                        <select defaultValue={'0'}
                            onChange={
                                (evt) => {
                                    const copy = {...category}
                                    copy.id = parseInt(evt.target.value)
                                    updateGame(copy)
                        }}>
                            <option value="0">Choose the Category...</option>
                                {categories.map(category => {
                                    return <option key={`categories--${category.id}`} value={category.id}>
                                        {category.cat_name}
                                        </option>
                                })}
                        </select>
                    </div>
                </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                        submitNewGame(game)
                }}
                className="btn btn-primary">Create</button>

        </form>

    )
}






                
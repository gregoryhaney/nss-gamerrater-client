/*
    This component's purpose is to show the details of
    the selected game when the user clicks the hyperlink
    for the game in GameList.
*/

import { getCategories, getSingleGame } from "./GameManager.js"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"

export const GameDetails = () => {
    const [ games, setGame ] = useState([])
    // const [ catData, setCatData ] = useState([])
    const history = useHistory()
    const id = useParams()

    useEffect(() => {
        getSingleGame(id) 
            .then(data => setGame(data)) 
        // getCategories
        //     .then(catData => setCatData(catData))           
    }, 
        [])

    return (

            <article className="singleGame">
                    
                {
                   
                        <section key={`game--${games.id}`} className="game">
                            <div className="game__title">Title: {games.title}</div>
                            <div className="game__designer">Designer: {games.designer}</div>
                            <div className="game__description">Description: {games.description}</div>
                            <div className="game__year">Year Released: {games.release_year}</div>
                            <div className="game__number">Number of Players: {games.number_of_players}</div>
                            <div className="game__time">Estimated Time to Play: {games.time_to_play} hours</div>
                            <div className="game__age">Age Recommendation: {games.age_rec} years</div>
                        </section>   
                            
                            // {
                            //     categories.map(category => { 
                            //         return <section key={`category--${category.id}`} className="category">
                            //             if (category.id === gamecategory.category_id_id)                          
                            //             <div className="game__category">Category: {category.cat_name}</div>
                            //      })
                            //      </section>
                            //     }   
                  
                }
            </article>
    )
}

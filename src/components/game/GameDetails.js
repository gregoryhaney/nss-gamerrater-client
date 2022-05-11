/*
    This component's purpose is to show the details of
    the selected game when the user clicks the hyperlink
    for the game in GameList.
*/

import { getCategories, getSingleGame, getReviews } from "./GameManager.js"
import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"


export const GameDetails = () => {
    const [ games, setGame ] = useState([])
    const [ categories, setCatData ] = useState([])
    const [ reviews, setReviews ] = useState([])
    const id = useParams()
    const history = useHistory()


    useEffect(() => {
        getSingleGame(id) 
            .then(data => setGame(data)) 
        getCategories()
            .then(categories => setCatData(categories)) 
        getReviews()
            .then(reviews => setReviews(reviews))                 
    }, 
        [])




    return (
    <>
            <article className="singleGame">                    
                   <>           
                        <section key={`game--${games.id}`} className="game">
                            <div className="game__title">Title: {games.title}</div>
                            <div className="game__designer">Designer: {games.designer}</div>
                            <div className="game__description">Description: {games.description}</div>
                            <div className="game__year">Year Released: {games.release_year}</div>
                            <div className="game__number">Number of Players: {games.number_of_players}</div>
                            <div className="game__time">Estimated Time to Play: {games.time_to_play} hours</div>
                            <div className="game__age">Age Recommendation: {games.age_rec} years</div>
                                    {
                                    reviews.map(review => {
                                        if (games.id === review.game)        
                                        return <section key={`review--${reviews.id}`} className="review">
                                        <div className="review__body">Review: {review.review_body}</div>
                                     </section>                                  
                                    })}    
                                
                                    {
                                    categories.map(category => {
                                        // if (ca )                          
                                    return <section key={`category--${category.id}`} className="category">
                                            Category: {category.cat_name}
                                    </section>
                                    })}

                                    
                                
                                <button type="submit"
                                    onClick={evt => {
                                        // Prevent form submission by browser's default behavior
                                        evt.preventDefault()
                                            history.push(`/games/${games.id}/review`)
                                    }}
                                className="btn btn-primary">Review Game</button>


                                <button type="submit"
                                    onClick={evt => {
                                        // Prevent form submission by browser's default behavior
                                        evt.preventDefault()
                                            history.push(`/games/${games.id}/update`)
                                    }}
                                className="btn btn-primary">Edit Game</button>


                        </section>   
                            
               </>
            </article>
    
           
        </>
    )
}

/*
    The purpose of this component is to provide a form for
    capturing a review of a game and adding it to the DB.
*/

import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createReview } from './GameManager.js'

export const ReviewForm = () => {  
    
    const [ review, updateReview ] = useState({
        review_body: "",
        game: 0,
        gamer: 0
    })

    const history = useHistory()
    const id = useParams()
        
    const submitNewReview = (evt) => {
            // the onChange FN to build the new Review object
            const newReview = {
                review_body: review.review_body,
                game: id.gameId,
                gamer: review.gamer
            }
        createReview(newReview)
            .then(() => {
                history.push(`/games/${id.gameId}`)
            })
    }

    return (
        <form className="reviewForm">
            <h2 className="reviewForm_title">Review the Game</h2>
                <fieldset>
                <div className="form-group">
                        <label htmlFor="review">My review: </label>
                        <input type="text" name="review" required autoFocus className="form-control"
                            value={review.review_body}
                            onChange={
                                (evt) => {
                                    const copy = {...review}
                                    copy.review_body = evt.target.value
                                    updateReview(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

               
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                        submitNewReview(review)
                }}
                className="btn btn-primary">Publish</button>

        </form>

    )
}
             
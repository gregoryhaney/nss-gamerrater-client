


// get all the Games
export const getGames = () => {
return fetch("http://localhost:8000/games", {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
})
        .then(res => res.json())

}

// get all the Categories
export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
            .then(res => res.json())
    
    }


export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
                .then(res => res.json())
}


// get a single, specific game to display in "GameDetails.js"
export const getSingleGame = (id) => {
    return fetch(`http://localhost:8000/games/${id.id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}


// get the specific Game to edit
export const getGameToEdit = (id) => {
    return fetch(`http://localhost:8000/games/${id.id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}



// create a new Game
export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
    method: "POST",
    headers: {
        "content-type": "application/json",
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    },
    body: JSON.stringify(game)
})
        .then(response => response.json())
}


// create a new Review for a game
export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(review)
    })
            .then(res => res.json())
}



// update an existing Game
export const updateGame = (updatedGame) => {
    return fetch("http://localhost:8000/games", {
        method: "PUT",
        headers: {
            "content-type": "application/json",
           "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(updatedGame)
    })
            .then(res => res.json())
}
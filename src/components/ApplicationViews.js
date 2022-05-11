import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameDetails } from "./game/GameDetails.js"
import { GameForm } from "./game/GameForm.js"
import { ReviewForm } from "./game/ReviewForm"
import { EditGameForm } from "./game/GameEditForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem",
            backgroundColor: "lightgray"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>

            <Route exact path="/games">
                <GameList />
            </Route>

            <Route exact path="/games/:id(\d+)">
                <GameDetails />
            </Route>

            <Route exact path="/games/new">
                <GameForm />
            </Route>

            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            
            <Route exact path="/games/:gameId(\d+)/update">
                <EditGameForm />
            </Route>

            {/* <Route exact path="/games/update/:id(\d+)">
                <UpdateGame />
            </Route> */}

        </main>
    </>
}

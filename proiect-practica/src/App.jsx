import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';


function App()
{
    return (
        <>
            <header>
                {/* <ion-icon name="game-controller-outline"></ion-icon> */}
                <ion-icon name="game-controller"></ion-icon>
                <h2 className="title">Games</h2>
                <button>Contact</button>
                <button>About</button>
            </header>

            <section className="choose-game">
                <h1>Choose a game</h1>
                <button>TIC TAC TOE</button>
                <button>GUESS THE COLOR</button>
                {/* poate pun icons: flaticons */}
            </section>

            <section className="tic-tac-toe">
                <TicTacToe />
            </section>

        </>
    )
}

export default App

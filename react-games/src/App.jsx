import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import GuessColor from './GuessColor';


function App()
{
    function scrollToSection(sectionId)
    {
        const section = document.getElementById(sectionId);
        if (section)
        {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className='App'>
            <header>
                <section className='logo'>
                    <ion-icon name="game-controller-outline"></ion-icon>
                    <h2 className="title">Games</h2>
                </section>

                <section className='contact-about-buttons'>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </section>
            </header>

            <section className="choose-game">
                <h1>Choose a game</h1>
                <section className='games-buttons'>
                    <button onClick={() => scrollToSection('tic-tac-toe')}>TIC TAC TOE</button>
                    <button onClick={() => scrollToSection('guess-color')}>GUESS THE COLOR</button>
                </section>
            </section>

            <section className='tic-tac-toe' id='tic-tac-toe'>
                <TicTacToe />
            </section>

            <section className='guess-color' id='guess-color'>
                <GuessColor />
            </section>

            <section className='about' id='about'>
                <h1>About</h1>
                <p>Welcome to Games! This website is a personal project created by me, Corina Simionescu. I made it in order to showcase my skills in web development and React programming.</p>
                <p>Feel free to explore the games on this site. If you have any feedback, questions, or suggestions for improvement, don't hesitate to send me a message.</p>
                <p>Thank you for visiting!</p>
            </section>

            <section className='contact' id='contact'>
                <h1>Contact</h1>
                <p>Feel free to reach out to me via:</p>
                <ul>
                    <li>GitHub: <a href="https://github.com/Corina-Simionescu">Corina-Simionescu</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/corina-simionescu/">Corina Simionescu</a></li>
                    <li>Email: corina.simionescu12@gmail.com</li>
                </ul>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Corina Simionescu</p>
            </footer>

        </section>
    )
}

export default App;

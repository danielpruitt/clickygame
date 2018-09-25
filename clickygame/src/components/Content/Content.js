//imports
import React from "react";
import Title from "../Title";
import Image from "../Image";
import Scoreboard from "../Scoreboard";
import ReactiveText from "../ReactiveText";
import pokemon from "../../character";


//class to give logic to the image clicks as well as control the score, top score and messages
class Content extends React.Component {
    //set state
    state = {
        score: 0,
        topScore: 0,
        message: "Click an image to begin"
    };

    // this is for the individual round score
    handleScoreIncrement = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    //this is for the top score incrementation
    handleTopScore = () => {
        this.setState({
            topScore: this.state.topScore + 1
        });
    };

    //round loss, triggers on incorrect guess
    handleGameLoss = () => {
        this.setState({
            score: 0
        });
    };

    //Handle correct guess
    handleCorrectGuess = () => {
        this.setState({
            message: "Correct!"
        });
    };


    //Handle Incorrect guess 
    handleIncorrectGuess = () => {
        this.setState({
            message: "Incorrect! Try again!"
        });
    };

    //handle the clicks on each image.
    handleImageClick = (name, selected) => {

        //store pokemon in a new variable to minimize confusion
        let pokemonArr = pokemon;

        pokemonArr.sort(function (a, b) { return 0.5 - Math.random() });

        // if statement will allow continuing the game or losing
        if (selected) {
            pokemonArr.forEach((pokemon) => {
                // if the card has been click already it will revert back to selected false, reset the score, and start the game over
                if (pokemon.name === name && pokemon.selected === true) {
                    pokemon.selected = false;
                    this.handleGameLoss();
                    this.handleIncorrectGuess();
                    this.setState({
                        message: "Incorrect! Try Again!"
                    });
                }
            });
        } else {
            // if the card is clicked correctly the score increases, the top score is changed if it hits the current top score, and allows user to continue
            pokemonArr.forEach((pokemon) => {
                if (pokemon.name === name && pokemon.selected === false) {
                    pokemon.selected = true;
                    this.handleScoreIncrement();
                    if (this.state.score === this.state.topScore) {
                        this.handleTopScore();
                    }
                    this.setState({
                        message: "Correct!"
                    });
                };
            });
        };
    };


    //renders the page. 
    render() {
        return (
            <div>
                <div className="shadow-sm">
                    <Title />
                </div>
                
                <div class="row">
                    <div className="col-8">
                        <Scoreboard handleImageClick={this.handleImageClick} score={this.state.score} topScore={this.state.topScore} />
                    </div>
                    <div className="col-4">
                        <ReactiveText handleImageClick={this.handleImageClick} message={this.state.message} />

                    </div>
                </div>

                <div className="container bg-dark">
                    <div className="row">
                        {pokemon.map((pokemon) =>
                            <Image key={pokemon.id} id={pokemon.name} selected={pokemon.selected} handleImageClick={this.handleImageClick} />
                        )}

                    </div>
                </div>
            </div>


        )
    }

};
// exports Content to be renderd in APP
export default Content;

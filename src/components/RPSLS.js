import React, { useEffect, Component } from 'react'
import Button from './Button';

class RPSLS extends Component {
  
    state = { 
        your_score: 0,
        ai_score: 0,
        choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
        userChoice:'',
        result: '',
        computerChoice:'',
        setComputerChoice: '',
        count:0, 
        useCounter: 0
    };


    generateComputerChoice = () =>{
        let {choices} = this.state;
        let randomChoice = choices[Math.floor(Math.random() * choices.length)]
        this.setState({computerChoice: randomChoice})   
    }

    handleClick = (value) => {
        this.setState({userChoice: value});
        this.generateComputerChoice();
        
    }
    
    handleResult = () =>{
        this.checkResult(); 
        this.setState({setComputerChoice: this.state.computerChoice})
       

    }
    
    checkResult = () => {
      let {result} = this.state;
      let {userChoice} = this.state;
      let {computerChoice} = this.state;

        switch(userChoice+computerChoice){
          case 'rocklizard':
          case 'rockscissors':
          case 'lizardpaper':
          case 'lizardspock':
          case 'spockrock':
          case 'spockscissors':
          case 'scissorslizard':
          case 'scissorspaper':
          case 'paperrock':
          case 'paperspock':
            this.state.result = "You Won!";
            this.state.your_score++;
            this.setState({result:"You Won!"})
            break
          case 'paperscissors':
          case 'paperlizard':
          case 'rockpaper':
          case 'rockspock':
          case 'lizardrock':
          case 'lizardscissors':
          case 'spocklizard':
          case 'spockpaper':
          case 'scissorsspock':
          case 'scissorsrock':
            this.state.ai_score++;
            this.setState({result:"You Lost!"})

            break
          case 'rockrock':
          case 'spockspock':
          case 'lizardlizard':
          case 'scissorsscissors':
          case 'paperpaper':
            this.setState({result:"Draw!"})
            break
      

        }
        console.log(result)

      }

      printMsg(){
        this.checkResult()
      }

     
    render(){
        return (
            <React.Fragment>
                <h1>User choice is: {this.state.userChoice}</h1>
                <button onClick={() => this.handleClick('rock')}>Rock</button>
                <button onClick={() => this.handleClick('paper')}>Paper</button>
                <button onClick={() => this.handleClick('scissors')}>Scissors</button>
                <button onClick={() => this.handleClick('lizard')}>Lizard</button>
                <button onClick={() => this.handleClick('spock')}>Spock</button>

                <button onClick={() => this.handleResult()} >Result</button>
                <h1>Computer choice is: {this.state.setComputerChoice}</h1>
                <h1>Your Score</h1>
                <h3>{this.state.your_score}</h3>
                <h1>AI Score</h1>
                <h3>{this.state.ai_score}</h3>

                <h1>{this.state.result}</h1>   
                
            </React.Fragment>
        );
        
    }
  
    

    
}
export default RPSLS;

 
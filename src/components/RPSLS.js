import React, { useEffect, Component } from 'react'
import './../styles.css'
import spock from '../assets/spock.png';
import scissors from '../assets/scissors.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import lizard from '../assets/lizard.png';

 
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
              <div class="row">
                <div class="col s12">
                  <h3 className ="result-text">{this.state.result}</h3>   
  
                </div>
                <div className="col s6 user">
                  <div className="user-score">
                    <h4 >Your Score: {this.state.your_score}</h4>
                  </div>
                  <h4 className="user-choice">Your choice is: {this.state.userChoice}</h4>                   
                </div>
                <div class="col s6 ai">
                  <h4 className="ai-score">AI Score: {this.state.ai_score}</h4>
                  <h4 className="ai-choice">Computer choice is: {this.state.setComputerChoice}</h4>                 
                </div>
             </div>
              
              <div className="row button-set">           
                <button className ='button' onClick={() => this.handleClick('rock')}>
                  <img src={rock} alt="" class="circle responsive-img"> 
                  </img>      
                </button>           
                <button className ='button' onClick={() => this.handleClick('paper')}>
                  <img src={paper} alt="" class="circle responsive-img"> 
                  </img>    
                  </button>             
                <button className ='button' onClick={() => this.handleClick('scissors')}>
                <img src={scissors} alt="" class="circle responsive-img"> 
                  </img>    
                  </button>      
                <button className ='button' onClick={() => this.handleClick('lizard')}>
                  <img src={lizard} alt="" class="circle responsive-img"> 
                  </img>    
                </button>     
                <button  className ='button' onClick={() => this.handleClick('spock')}>  
                  <img src={spock} alt="" class="circle responsive-img"> 
                  </img>    
                </button>
              </div>

              <div className='row'>
                <div className="result-button-container">
                  <button className = 'result-button' onClick={() => this.handleResult()} >Result</button>               
                </div>
              </div>
            </React.Fragment>
        );
        
    }
  
    

    
}
export default RPSLS;

 
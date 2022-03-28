import React, { Component } from 'react'
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
        choices: ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'],
        imgChoices: [rock, paper, scissors, lizard, spock],
        userChoice:'',
        action:'',
        setImgAI:null,
        imgAI:null,
        img : null,
        result: '',
        computerChoice:'',
        setComputerChoice: '',
        count:0, 
        useCounter: 0
    };


    generateComputerChoice = () =>{
        let {imgChoices} = this.state;
        let {choices} = this.state;
        let choice = Math.random()
        let randomChoice = choices[Math.floor(choice * choices.length)]
        let randomImgChoice = imgChoices[Math.floor(choice * imgChoices.length)]
        this.setState({computerChoice: randomChoice})   
        this.setState({setImgAI: randomImgChoice})   


    }

    handleClick = (value, imgVal) => {
        this.setState({userChoice: value});
        this.generateComputerChoice();
        this.setState({img: imgVal})
        
    }
    
    handleResult = () =>{
        this.checkResult(); 
        this.setState({setComputerChoice: this.state.computerChoice})
        this.setState({imgAI : this.state.setImgAI})

       

    }
    
    checkResult = () => {
      let {result} = this.state;
      let {userChoice} = this.state;
      let {computerChoice} = this.state;

        switch(userChoice+computerChoice){
          case 'RockLizard':
          case 'RockScissors':
          case 'LizardPaper':
          case 'LizardSpock':
          case 'SpockRock':
          case 'SpockScissors':
          case 'ScissorsLizard':
          case 'ScissorsPaper':
          case 'PaperRock':
          case 'PaperSpock':
            this.state.result = "You Won!";
            this.state.your_score++;
            this.setState({result:"You Won!"})
            break
          case 'PaperScissors':
          case 'PaperLizard':
          case 'RockPaper':
          case 'RockSpock':
          case 'LizardRock':
          case 'LizardScissors':
          case 'SpockLizard':
          case 'SpockPaper':
          case 'ScissorsSpock':
          case 'ScissorsRock':
            this.state.ai_score++;
            this.setState({result:"You Lost!"})
            break
          case 'RockRock':
          case 'SpockSpock':
          case 'LizardLizard':
          case 'Scissorsscissors':
          case 'PaperPaper':
            this.setState({result:"Draw!"})
            break
          default:
            break
        }
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
                <div className="col s4 user">
                  <div className="user-score">
                    <h4>  
                        <span style={{color: "#265d7c"}}>Your</span> 
                        <span style={{color: "#ea3e18"}}> Score: </span> 
                        <span style={{color: "#265d7c"}}>{this.state.your_score}</span>
                    </h4>
                  </div>
                  <h4 className="user-choice-lable" style={{color: "#265d7c"}}>{this.state.userChoice}</h4>        

                    <h4 className="user-choice">     
                        <img src={this.state.img} alt="" class="circle responsive-img"> 
                      </img>
                    </h4>  
                                   
                </div>
                <div class="col s4 VS">
                  <h1 className='versus'>
                    <span style={{color: "#265d7c"}}>
                    V
                    </span > 
                    <span style={{color: "#ea3e18"}}> 
                    S
                    </span>
                    
                  </h1>
                  <h1>
                  {this.state.userChoice} {this.state.action} {this.state.computerChoice}

                  </h1>

                </div>

                <div class="col s4 ai">
                  <h4 className="ai-score">
                      <span style={{color: "#265d7c"}}>AI 
                        <span style={{color: "#ea3e18"}}> Score: </span>  
                        <span style={{color: "#265d7c"}}> 
                          {this.state.ai_score}
                        </span>
                      </span>   
                      
                  </h4>
                  <h4 className="user-choice-lable" style={{color: "#ea3e18"}}>{this.state.setComputerChoice}</h4>        

                  <h4 className="ai-choice">
                  <img src={this.state.imgAI} alt="" class="circle responsive-img"> 
                  </img>
                  </h4>                 
                </div>
             </div>
              
              <div className="row button-set">           
                <button className ='button' onClick={() => this.handleClick('Rock', rock)}>
                  <img src={rock} alt="" class="circle responsive-img"> 
                  </img>      
                </button>           
                <button className ='button' onClick={() => this.handleClick('Paper', paper)}>
                  <img src={paper} alt="" class="circle responsive-img"> 
                  </img>    
                  </button>             
                <button className ='button' onClick={() => this.handleClick('Scissors', scissors)}>
                <img src={scissors} alt="" class="circle responsive-img"> 
                  </img>    
                  </button>      
                <button className ='button' onClick={() => this.handleClick('Lizard', lizard)}>
                  <img src={lizard} alt="" class="circle responsive-img"> 
                  </img>    
                </button>     
                <button  className ='button' onClick={() => this.handleClick('Spock', spock)}>  
                  <img src={spock} alt="" className="circle responsive-img"> 
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

 
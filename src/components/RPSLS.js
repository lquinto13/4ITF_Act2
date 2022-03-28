import React, { Component } from 'react'
import './../styles.css'
import spock from '../assets/spock.png';
import scissors from '../assets/scissors.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import lizard from '../assets/lizard.png';
import { Container, Row, Col } from 'react-bootstrap'




class RPSLS extends Component {

  state = {
    your_score: 0,
    ai_score: 0,
    choices: ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'],
    imgChoices: [rock, paper, scissors, lizard, spock],
    color: '',
    userChoice: '',
    action: '',
    setImgAI: null,
    imgAI: null,
    img: null,
    result: '',
    computerChoice: '',
    setUserChoice: '',
    setComputerChoice: '',
    count: 0,
    useCounter: 0
  };

  generateComputerChoice = () => {
    let { imgChoices } = this.state;
    let { choices } = this.state;
    let choice = Math.random()
    let randomChoice = choices[Math.floor(choice * choices.length)]
    let randomImgChoice = imgChoices[Math.floor(choice * imgChoices.length)]
    this.setState({ computerChoice: randomChoice })
    this.setState({ setImgAI: randomImgChoice })



  }

  handleClick = (value, imgVal) => {
    this.setState({ userChoice: value });
    this.generateComputerChoice();

    this.setState({ img: imgVal })

  }

  handleResult = () => {
    this.setState({ setComputerChoice: this.state.computerChoice })
    this.setState({ setUserChoice: this.state.userChoice })
    this.checkResult();
    this.checkAction();
    this.setState({ imgAI: this.state.setImgAI })




  }

  checkResult = () => {
    let { userChoice } = this.state;
    let { computerChoice } = this.state;

    switch (userChoice + computerChoice) {
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
        this.setState({ result: "You Won!" })
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
        this.setState({ result: "You Lost!" })

        break
      case 'RockRock':
      case 'SpockSpock':
      case 'LizardLizard':
      case 'Scissorsscissors':
      case 'PaperPaper':
        this.setState({ result: "Draw!" })
        break
    }
  }

  checkAction = () => {
    let { userChoice } = this.state;
    let { computerChoice } = this.state;

    if (userChoice === computerChoice) {
      this.setState({ setUserChoice: "" })
      this.setState({ setComputerChoice: "" })
      this.setState({ color: 'white' })
      this.setState({ action: "User and AI chose the same" })
    }

    if (userChoice === "Rock") {
      if (computerChoice === "Paper") {
        this.setState({ action: 'Gets Covered by' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Scissors") {
        this.setState({ action: 'Beats' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Lizard") {
        this.setState({ action: 'Smashes' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Spock") {
        this.setState({ action: 'Gets Obliterated By' })
        this.setState({ color: '#ea3e18' })

      }
    } else if (userChoice === "Paper") {
      if (computerChoice === "Rock") {
        this.setState({ action: 'Covers' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Scissors") {
        this.setState({ action: 'Gets Cut by' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Lizard") {
        this.setState({ action: 'Gets Eaten by' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Spock") {
        this.setState({ action: 'Disproves' })
        this.setState({ color: '#265d7c' })

      }
    } else if (userChoice === "Scissors") {
      if (computerChoice === "Rock") {
        this.setState({ action: 'Gets Beat By' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Paper") {
        this.setState({ action: 'Cuts' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Lizard") {
        this.setState({ action: 'Decapitates' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Spock") {
        this.setState({ action: 'Gets Smashed By' })
        this.setState({ color: '#ea3e18' })

      }
    } else if (userChoice === "Lizard") {
      if (computerChoice === "Rock") {
        this.setState({ action: 'Gets Smashed By' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Paper") {
        this.setState({ action: 'Eats' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Scissors") {
        this.setState({ action: 'Gets Decapitated By' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Spock") {
        this.setState({ action: 'Poisons' })
        this.setState({ color: '#265d7c' })

      }
    } else if (userChoice === "Spock") {
      if (computerChoice === "Rock") {
        this.setState({ action: 'Obliterates' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Paper") {
        this.setState({ action: 'Gets Disproved By' })
        this.setState({ color: '#ea3e18' })

      }
      else if (computerChoice === "Scissors") {
        this.setState({ action: 'Smashes' })
        this.setState({ color: '#265d7c' })

      }
      else if (computerChoice === "Lizard") {
        this.setState({ action: 'Gets Poisoned By' })
        this.setState({ color: '#ea3e18' })

      }
    }

  }

  printMsg() {
    this.checkResult()
  }

  render() {
    return (
      <React.Fragment>
        <div class="row">
          <Row>
          <div class="col s12">
            <h3 className="result-text">{this.state.result}</h3>
          </div>
          </Row>

          <div className="col s4 user">
            <div className="user-score">
              <h4>
                <span style={{ color: "#265d7c" }}>Your</span>
                <span style={{ color: "#ea3e18" }}> Score: </span>
                <span style={{ color: "#265d7c" }}>{this.state.your_score}</span>
              </h4>
            </div>
            <h4 className="user-choice-lable" style={{ color: '#265d7c' }}>{this.state.userChoice}</h4>

            <h4 className="user-choice">
              <img src={this.state.img} alt="" class="circle responsive-img">
              </img>
            </h4>

          </div>
          <div class="col s4 VS">
            <h1 className='versus'>
              <span style={{ color: "#265d7c" }}>
                V
              </span >
              <span style={{ color: "#ea3e18" }}>
                S
              </span>

            </h1>
            <h3 className='action' style={{ color: this.state.color }}>
              {this.state.setUserChoice} {this.state.action} {this.state.setComputerChoice}

            </h3>

          </div>

          <div class="col s4 ai">
            <h4 className="ai-score">
              <span style={{ color: "#265d7c" }}>AI
                <span style={{ color: "#ea3e18" }}> Score: </span>
                <span style={{ color: "#265d7c" }}>
                  {this.state.ai_score}
                </span>
              </span>

            </h4>
            <h4 className="user-choice-lable" style={{ color: "#ea3e18" }}>{this.state.setComputerChoice}</h4>

            <h4 className="ai-choice">
              <img src={this.state.imgAI} alt="" class="circle responsive-img">
              </img>
            </h4>
          </div>
        </div>

        <div style={{position: "fixed", bottom: "3%", width:"100%"}}fluid>
          <div style={{ display: "grid", gridTemplateColumns: "20% 20% 20% 20% 20%" }}>

            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <button className='button' onClick={() => this.handleClick('Rock', rock)}>
                <img src={rock} alt="" class="circle responsive-img">
                </img>
              </button>
            </div>

            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <button className='button' onClick={() => this.handleClick('Paper', paper)}>
                <img src={paper} alt="" class="circle responsive-img">
                </img>
              </button>
            </div>

            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <button className='button' onClick={() => this.handleClick('Scissors', scissors)}>
                <img src={scissors} alt="" class="circle responsive-img">
                </img>
              </button>
            </div>

            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <button className='button' onClick={() => this.handleClick('Lizard', lizard)}>
                <img src={lizard} alt="" class="circle responsive-img">
                </img>
              </button>
            </div>

            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <button className='button' onClick={() => this.handleClick('Spock', spock)}>
                <img src={spock} alt="" class="circle responsive-img">
                </img>
              </button>
            </div>


          </div>

          <div className='row' style={{marginTop: "100px"}}>
          <div className="result-button-container">
            <button className='result-button' onClick={() => this.handleResult()} >Result</button>
          </div>
        </div>

        </div>


        

        



      </React.Fragment>
    );

  }




}
export default RPSLS;


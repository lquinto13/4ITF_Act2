import { useState, useEffect } from 'react'
import Button from './components/Button'

const App = () => {

  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
    checkResult()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    checkResult()
  }, [computerChoice, userChoice])

  const checkResult = () => {
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
        setResult('YOU WON!')
        console.log(result)
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
        setResult('YOU LOST!')
        console.log(result)
        break
      case 'rockrock':
      case 'spockspock':
      case 'lizardlizard':
      case 'scissorsscissors':
      case 'paperpaper':
        setResult('DRAW!')
        console.log(result)
        break
    }
  }

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {/* <button onClick={() => handleClick('rock')}>Rock</button>
      <button onClick={() => handleClick('paper')}>Paper</button>
      <button onClick={() => handleClick('scissors')}>Scissors</button>
      <button onClick={() => handleClick('spock')}>Spock</button>
      <button onClick={() => handleClick('lizard')}>Lizard</button> */}
      {choices.map((choice, index) =>
        // <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
        <Button choice={choice} handleClick={handleClick}/>
      )}
      <h1>{result}</h1>
    </div>
  )
}

export default App;

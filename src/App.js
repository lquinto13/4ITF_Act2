import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import RPSLS from './components/RPSLS';
import Scoreview from './components/Scoreview';




class App extends React.Component{
  render(){
    return (
    //   <div>
    //     <h1>User choice is: {userChoice}</h1>
    //     <h1>Computer choice is: {computerChoice}</h1>

    //     {choices.map((choice, index) =>
    //       <Button choice={choice} handleClick={handleClick}/>
    //     )}
    //     <h1>{result}</h1>
    //   </div>
    // )
    <div>
            <RPSLS></RPSLS>

    </div>
    )
  }
}



  

export default App;

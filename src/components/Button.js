import React from 'react'

const Button = ({choice, handleClick}) => {
  return (
    <button onClick={() => this.handleClick(choice)}>{choice}</button>
  )
}

export default Button
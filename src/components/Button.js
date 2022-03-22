import React from 'react'

const Button = ({choice, handleClick}) => {
  return (
    <button onClick={() => handleClick(choice)}>{choice}</button>
  )
}

export default Button
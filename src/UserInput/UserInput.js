import React from 'react';

const userInput = (props) => {
  const styleInput = {
    width: '30%',
    margin: '2em auto',
    padding: '0.8em 0.7em',
    color: '#888',
    fontSize: '18px',
    fontFamily: 'sans-serif',
    border: '1px solid #119bf4',
    borderRadius: '6px'
  }

  return (
    <div className="UserInput">
      <input style={styleInput} type="text" value={props.value} onChange={props.changed} />
    </div>
  )
}

export default userInput;

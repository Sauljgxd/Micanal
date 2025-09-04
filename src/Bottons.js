import React from 'react'; 

export default function Boton ({color, children}){

  const buttonStyle = {
    backgroundColor: color,
    border: 'none',
    
    borderRadius: '5',
    cursor: 'pointer',
    fontSize: '100%',
    position: 'absolute'
  }

  return(
    <button style={buttonStyle}>
      {children}
    </button>
    
  )
}
import { useState, useEffect } from 'react';
import './AnimBlock.css';

function AnimBlock() {

  const [state, setState] = useState(false);
  const [states, setStates] = useState(false);
  
 const change = () => {
   console.log('obj')
    setStates(true)
      
  }

  const changeF = () => {
    console.log('dsfsfsd')
    setStates(false)
       
   }

  return (
    <div className='animblock'>
      <div className='animblock__block' style={states ? {animationPlayState: 'paused'} : {animationPlayState: 'start'}} onMouseOver={change} onMouseOut={changeF}></div>
      <div className='animblock__block_type_red' style={states ? {animationPlayState: 'paused'} : {animationPlayState: 'start'}} onMouseOver={change} onMouseOut={changeF}></div>
    </div>)
}

export default AnimBlock;
import React from 'react';
import './Container.css';
import Block from '../Block/Block';

function Container (props) {

    function calculateContainerStyle (scroll) {
      let margin;
      margin = `calc(70% - ${scroll}px) 0 0 0`;
      return margin;
    }

    const margind = calculateContainerStyle (props.scroll);

    return(
      <div className='container' style={{ margin: margind}}>
       <Block scroll={props.scroll} position="one"/>
      <Block scroll={props.scroll} position="two"/>
     {/*  <Block margin={props.margin} position="three"/>*/}
      </div>)
}

export default Container;
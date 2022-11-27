import { useState, useEffect } from 'react';
import './Block.css';

function Block(props) {

  const [scrollTick, setScrollTick] = useState(0);
  const [scrollState, setScrollState] = useState(0);

  /*useEffect(() => {
    if (scrollTick <= props.scroll) {
      setScrollState(scrollState + 1);
    }
    else if (scrollTick >= props.scroll) {
      setScrollState(scrollState - 1);
    }
    setScrollTick(props.scroll);
  }, [props.scroll])

  console.log(String(Math.round(props.scroll)));*/



  function calculatescrollSyle(scroll) {
    /*console.log(scrollState);*/
    const styleObj = {};/*
    if (scroll <= 5) {
      styleObj.Two = '0';
      styleObj.Three = '0';
    }
    else if (scroll <= 85) {

      styleObj.Two = '73px';
      styleObj.Three = '157px';
    }
    else if (scroll <= 180) {
      styleObj.Two = '73px';
      styleObj.Three = '157px';
      console.log('равно');

    }
    else if (scroll <= 260) {
      styleObj.Two = '98px';
      styleObj.Three = '183px';
    }
    else {
      styleObj.One = `calc(${88}vh - ${Math.round(scroll)}px) 0 0 0`;
    }*/
    console.log(scroll);
    if(scroll < 50) {
      styleObj.Two = '80px';
    }
    else if ( scroll <= 86) {
      console.log(scroll);
      styleObj.Two = '74px';
    }
    else if ( scroll >= 309) {
      console.log(scroll);
      styleObj.Two = '400px';
    }
    else {
      styleObj.Two = `calc(74px + ${Math.round(scroll) + Math.round(scroll)/3}px - 86px)`;
    }
    

    return styleObj;
  }

  const dataStyle = calculatescrollSyle(props.scroll);
  console.log(dataStyle);

  if (props.position === "one") {
    return (
      <div className="block block_position_one" style={{ top: '0' }} >
        <header className="block__header">{props.position}</header>
        <div className="block__img"></div>
      </div>
    );
  }
  else if (props.position === "two") {
    return (
      <div className="block block_position_two" style={{ top: `${dataStyle.Two}` }} >
        <header className="block__header">{props.position}</header>
        <div className="block__img"></div>
      </div>
    );
  }
  else {
    return (
      <div className="block block_position_three" style={{ top: `${dataStyle.Three}` }} >
        <header className="block__header">{props.position}</header>
      </div>
    );
  }
}

export default Block;
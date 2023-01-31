import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Card(props) {

  return (
    <div
    style={{
      height: '300px',
      width:'400px',
      borderRadius: '5px',
      margin: '30px',
      fontSize: '1.3rem',
      fontWeight: '400',
      textAlign: 'center',
      verticalAign: 'middle',
      border:'1px solid grey',
      cursor: 'pointer',
      wordSpacing: '0.2rem',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center',
    }}
    >
      <img src={props.img} alt='...' style={{height: '270px', width: '400px'}}/>
      <span>{props.name}</span>
    </div>
  )
}

export default Card
import React from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
     width: 50%;
     margin: auto;
     border: 1px solid #eee;
     box-shadow: 1px 2px 3px #ccc;
     padding: 20px;
     background:honeydew;
     text-align: center;
     color: teal;
     font-size: unset;

     @media (min width: 500px){
         
             width: 450px
              }
     `;
     
 const person = (props) => {
     
     return (
     //<div className="Person">
     <StyledDiv>
     <p>i m {props.name} and i m {props.age} year old </p>
     <p>{props.children}</p>
    <input type = "text" onChange = {props.changed} value  =  {props.name} />
    </StyledDiv>
     )
 };

 export default person;
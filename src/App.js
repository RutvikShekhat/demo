import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import React, { useState } from 'react';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
//import Radium from 'radium';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: green;
font: inherit;

&:hover {
  background-color:lightgreen;
  color:black;
}
`;

class App extends Component {
    state = {
    person:[
      {name:"rutvik" ,age:20},
      {name:"disha" ,age:70},
      {name:"kesha" ,age:19}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newname) => {
    //console.log('was  changed!');
    this.setState({
      person: [
        {name: newname ,age:20},
        {name:'disha' ,age:70},
        {name:'kesha' ,age:20}
      ]
    })
    }

     nameChangedHandler = (event) => {
      this.setState({
        person: [
          {name: 'rutvik',age:20},
          {name: event.target.value ,age:70},
          {name: 'disha' ,age:19}
        ]
      })
    }
    togglePersonsHandlers = () => {
      const doesshow = this.state.showPersons;
      this.setState({showPersons: !doesshow})
    }

    render () {
      const style = {
        backgroundColor: 'green',
        font: 'inherit',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
      };

      let persons = null;
      if(this.state.showPersons){
        persons  =  (
          <div>
            {this.state.person.map(person => {
              return <Person 
              name = {person.name}
              age = {person.age} />
            })}
              
          </div>
        );
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor:'lightpink',
          color:'black'
        };
      }

      return ( 
        <div className = 'App'>
          <h1 style={{color:'red'}}><b><i>Hi,i m react app</i></b></h1>
          
          <StyledButton style={style} onClick={this.togglePersonsHandlers}>Toggle Person</StyledButton>
          {persons}
        </div>
      );
    } 
}

export default App;



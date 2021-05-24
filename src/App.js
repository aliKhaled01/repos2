import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { ID: 'asd1',name: 'Max', age: 28 },
      {ID: 'asd2', name: 'Manu', age: 29 },
      {ID: 'asd3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons:false
  };

  newChangeHandler = (event,id) => {
    const perIndex = this.state.persons.findIndex( p =>{
     return p.ID === id
     
    });
    const person = {
      ...this.state.persons[perIndex]
    };
person.name=event.target.value;
const persons = [...this.state.persons];
persons[perIndex]=person;
    this.setState({ persons:persons });

  }
  togglePersonsHandler = () =>{
    const doesshow =this.state.showPersons
    this.setState({ showPersons:!doesshow})

  }
  deletePersonsHandler = (personIndex) =>{
    const deletePerson =  [...this.state.persons];
    deletePerson.splice(personIndex,1);
    this.setState({persons: deletePerson })


  }

  render() {
    const Style = {
      backgroundColor:'green',
      color:'white',
      border:'1px solid #eee',
      padding:"10px",
      cursor:'pointer' ,
':hover':{
  backgroundColor:'lightgreen',
  color:'black'
}
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
      
      
        <div > 
       {this.state.persons.map((person,i) =>{ // excute every ele and out this new ele 
      return  <Person
           name ={person.name}
            age ={person.age} 
             changed={(event)=> this.newChangeHandler (event,person.ID)} 
             click={ () =>
         this.deletePersonsHandler(i)} 
         key={person.ID} /> 

       }

        )}
       </div>
   );
   Style.backgroundColor ='red';
   Style[':hover']={
    backgroundColor:'lightred',
    color:'black'
        }
    }
 
   
    //let classes=['red' , 'bold'].join(' '); //'red bold'
    let classes =[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonsHandler}
        style={Style}
        >Toggle</button>
        {persons}

         
         
     
      
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);

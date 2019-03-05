import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
class App extends Component {
  state ={
    persons: [
      {id:'10',name:'Abdus Sattar', age:35},
      {id:'20',name:'Naznin Akter', age:28},
      {id:'30',name:'Ayomoy Ahmed', age:4}
    ],

    show:true
  }
  togglePersonHandler =()=>{
    const currentState = this.state.show;
    this.setState({
      show: !currentState
    });
  }
  deletePerson =(index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  changeNameHandler =(event,id)=>{

    const personIndex = this.state.persons.findIndex(p=>{
      return  p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons:persons});
  }
  render() {

    let person = null;
    let btnClass='';
    if(this.state.show){
      person =   (
        <div>
        {this.state.persons.map((person,index)=>{
          return <Person
          click={()=>this.deletePerson(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change ={(event) => this.changeNameHandler(event, person.id)}
          />
        })
      }
      </div>
    );

    btnClass = classes.red;
  }
  const warningClasses = [];
  if(this.state.persons.length<=2){
    warningClasses.push(classes.red);
  }
  if(this.state.persons.length<=1){
    warningClasses.push(classes.bold);
  }
  return (
    <div className={classes.App}>
    <h1>Hi, I am a react App</h1>
    <p className={warningClasses.join(" ")}>This is really working!</p>
    <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Person</button>
    {person}
    </div>
  );
}
}

export default App;

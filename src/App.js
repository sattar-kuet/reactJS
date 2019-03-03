import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
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
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;
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
    style.backgroundColor = 'red';

  }
  const classes = [];
  if(this.state.persons.length<=2){
    classes.push('red');
  }
  if(this.state.persons.length<=1){
    classes.push('bold');
  }
  return (
    <div className="App">
    <h1>Hi, I am a react App</h1>
    <p className={classes.join(" ")}>This is really working!</p>
    <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
    {person}
    </div>
  );
}
}

export default App;

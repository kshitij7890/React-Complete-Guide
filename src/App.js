import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Kshitij', age: 20 },
      { name: 'Satya', age: 21 }
    ],
    otherState: 'some other value'
  };

  SwitchNameHandler = () => {
    //console.log('was clicked');
    // DONT DO THIS ---> this.state.persons[0].name="KshitijKumar";
    this.setState({
      persons: [
        { name: 'KshitijKumar', age: 20 },
        { name: 'Satya', age: 22 }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>I am a React App</h1>
        <button onClick={this.SwitchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobbies : Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;

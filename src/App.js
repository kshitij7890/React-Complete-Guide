import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Kshitij', age: 20 },
      { name: 'Satya', age: 21 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'KshitijKumar', age: 20 },
        { name: 'Satya', age: 22 }
      ]
    });
  };

  return (
    <div className='App'>
      <h1>I am a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        Hobbies : Coding
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;

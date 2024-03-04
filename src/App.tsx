import React from 'react';
import teamData from './CollegeBasketballTeams.json';

import './App.css';

const jsonTeam = teamData['teams'];

function App() {
  return (
    <div className="App">
      <h1>College Basketball Team List</h1>
      <h4>Here is a list of all college basketball teams in the NCAA</h4>

      {jsonTeam.map((team) => (
        <div className="card">
          <h2>{team.school} University</h2>
          <p>
            Location: {team.city}, {team.state}
          </p>
          <p> School Mascot: {team.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

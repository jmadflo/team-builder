import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css'
import Form from './Form'



function App() {
  let listOfTeamMembers = [
    { id: uuid(), name: 'Palpatine', email: 'emperor@empire.gov', role: "Emperor"},
    { id: uuid(), name: 'Yoda', email: 'masteryoda@jedi.org', role: "Dangerous Dissident"},
    { id: uuid(), name: 'Obi-wan', email: 'masterobi@jedi.org', role: "Dangerous Dissident"},
    { id: uuid(), name: 'Anakin', email: 'dvader@empire.gov', role: "Emperor's Apprentice"},
  ]
    
  const [teamList, setTeamList] = useState(listOfTeamMembers)
  const [formData, setFormData] = useState({})

  

  return (
    <div className="App">
      <h1>Imperial Database!</h1>
      <div className="team">
        {teamList.map(member => <h3 key={member.id}><span>{`Name: ${member.name}`}</span><span>{`Role: ${member.role}`}</span><span>{`Email: ${member.email}`}</span>{/*<button>Edit</button>*/}</h3>)}
      </div>
      <Form />
    </div>
  );
}

export default App;

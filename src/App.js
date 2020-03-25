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

  const [formData, setFormData] = useState({name: '', email: '', role: ''})

  const [memberToEdit, setMemberToEdit] = useState(null)

  const editMember = () => {
    const newItem = teamList.map((member, index)=> {
      if (memberToEdit.id === member.id){
        member.name = formData.name
        member.email = formData.email
        member.role = formData.role
        return [member, index]
      }
    })

    let newList = [...teamList]
    newList[newItem[1]] = newItem[0]
    setTeamList(newList)
    
    setMemberToEdit(null)
  }

  return (
    <div className="App">
      <h1>Imperial Database!</h1>
      <div className="team">
        {teamList.map(member => <h3 key={member.id}><span>{`Name: ${member.name}`}</span><span>{`Email: ${member.email}`}</span><span>{`Role: ${member.role}`}</span><button onClick={() => setMemberToEdit(member)}>Edit</button></h3>)}
      </div>
      <Form formData={formData} setFormData={setFormData} teamList={teamList} setTeamList={setTeamList} memberToEdit={memberToEdit} editMember={editMember}/>
    </div>
  );
}

export default App;

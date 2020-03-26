import React, { useEffect } from 'react'
import { v4 as uuid } from 'uuid'

const Form = ({formData, setFormData, teamList, setTeamList, memberToEdit, editMember}) => {
    
    const updateForm = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
        // console.log(formData)
    }
    const amendFriends = event => {
        if (memberToEdit) {
            editMember()
        } else {
            event.preventDefault()
            const newMember = {
                id: uuid(),
                name: formData.name,
                email: formData.email,
                role: formData.role
            }
            setTeamList([...teamList, newMember])
            console.log(teamList)
        }
        
    }

    useEffect(() => {
        if (memberToEdit){
            setFormData(memberToEdit)
        }

    }, [memberToEdit])

    return (
        <form onSubmit={amendFriends}>
            <label>
                Name:
                <input name="name" type="text" value={formData.name || ""} onChange={updateForm}/>
            </label>
            <label>
                Email:
                <input name="email" type="text" value={formData.email || ""} onChange={updateForm}/>
            </label>
            <label>
                Role:
                <input name="role" type="text" value={formData.role || ""} onChange={updateForm}/>
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form
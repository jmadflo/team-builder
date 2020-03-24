import React from 'react'

const Form = () => {
    return (
        <form>
            <label>
                First Name:
                <input name="firstName" type="text"/>
            </label>
            <label>
                Last Name:
                <input name="lastName" type="text" />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form
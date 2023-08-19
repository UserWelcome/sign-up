import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

const Edit = (props) => {

    const [values, setValues] = useState(props.currentUser)
    useEffect(() => { setValues(props.currentUser) }, [props])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    return (
        <Form 
            onSubmit={(e) => {
                e.preventDefault();
                props.updateUser(values.id, values);
            }}>
            <label>Full name</label>
            <input type="text" name="fullname" value={values.fullname}
                onChange={handleInputChange} /><br />

            <label>Email</label>
            <input type="email" name="email" value={values.email} onChange={handleInputChange} /><br />

            <label>Phone no</label>
            <input type="text" name="phoneno" value={values.phoneno}
                onChange={handleInputChange} /><br />

            <label>DOB</label>
            <input type='date' name='dob' value={values.dob} onChange={handleInputChange} /><br />

            <label>Gender</label>
            <select name='gender'  value={values.gender} onChange={handleInputChange}>
                <option    >male</option>
                <option   >Female</option>
                <option   >Other option</option>
            </select><br />
            <button type="submit">Update user</button><br />
            <button onClick={() => props.setEditing(false)}
                className="button muted-button" >
                Cancel </button>
        </Form>
    )



  
}

export default Edit ;
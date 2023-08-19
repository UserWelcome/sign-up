import React from 'react';
import { useState } from "react";
import { Form } from 'react-bootstrap';
import './sign.css'
import * as yup from 'yup';

const SignUp = (props) => {
    const initialValues = {
        id: null, fullname: " ", email: " ", phoneno: " ", dob: " ", gender: " "
    }
    const [values, setValues] = useState(initialValues);
    const userSchema = yup.object().shape(
        {
            fullname: yup.string().required(),
            email: yup.string().min(8).required(),
            phoneno: yup.string(),
            dob: yup.string(),
            gender: yup.string()
        }
    )
    async function validateForm() {
        let dataObject = { id: initialValues.id, fullname: initialValues.fullname, email: initialValues.email, phoneno: initialValues.phoneno, dob: initialValues.dob, gender: initialValues.gender }


        const isValid = await userSchema.validata(dataObject);
        if (isValid) {
            alert('form is valid')
        } else {
            alert('form is invalid')
        }
    }

    //(isValid)?alert('form is valid'):alert('form is invalid');

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, });
}


const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.fullname || !values.email || !values.phoneno || !values.dob || !values.gender)
        return

    props.addUser(values)
    setValues(initialValues);

};
return (
    <div className='signup'>
        <Form className="form-group" onSubmit={handleSubmit}>
            SignUp<br />
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder='Fullname' name="fullname" value={values.fullname} onChange={handleInputChange} /><br /><br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={values.email} onChange={handleInputChange} /><br /><br />
            <label htmlFor="phoneno">Phone no.</label>
            <input type="text" name="phoneno" value={values.phoneno} onChange={handleInputChange} /><br /><br />
            <label htmlFor="dob">DOB</label>

            <input type='date' name='dob' value={values.dob} onChange={handleInputChange} /><br /><br />
            <label htmlFor="gender">Gender</label>
            <select name='gender' value={values.gender} onChange={handleInputChange}>
                <option >male</option>
                <option>Female</option>
                <option >Other option</option>
            </select><br /><br />


            <button className='button'  onSubmit={()=>validateForm()}>Register</button>
        </Form>




    </div>
)
}

export default SignUp;
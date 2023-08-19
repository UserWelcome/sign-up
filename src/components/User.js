import React from "react";
import { Table } from "react-bootstrap";


const UserTable = (props) => {
  return (
    <Table className="table-sucess table-striped table-bordered" >
      <thead >
        <tr style={{backgroundColor:"HighlightText"}}>
          <th>Fullname</th>
          <th>Phone no</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ?
          (props.users.map((values) =>
          (
            <tr style={{}}>
              <td>{values.fullname}</td>
              <td>{values.phoneno}</td>
              <td>{values.email}</td>
              <td>{values.dob}</td>
              <td>{values.gender}</td>
              <td>
                <button onClick={() => props.editRow(values)} className="edit">Edit</button>
                <button onClick={() => props.deleteUser(values.id)} className="edit">Delete</button>

              </td>

            </tr>

          ))) :
          (
            <tr>
              <td colSpan={6}>
                no users
              </td>
            </tr>


          )}

      </tbody>
    </Table>
  )
}




export default UserTable;

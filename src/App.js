
import { React, useState } from 'react'
import SignUp from "./components/SignUp";
import Edit from './components/Edit';
import User from './components/User';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from './download.jpg';

import './style.css'; 
function App() {
  const myStyle={
    backgroundImage: `url(${img})` ,
    height:'100%',
    marginTop:'-70px',
 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}

  const data = [
    {
      id: 1, fullname: "Abishek Gupta ", email: "abhi@gmail.com ", phoneno: "993321155 ", dob: "19-09-1997 ", gender: " Male"
    },
   { id: 2, fullname: "kanika Singh ", email: "kani@gmail.com ", phoneno: "945678999 ", dob: "19-12-1994 ", gender: " Female"
  },
 { id: 1, fullname: "Happy Abrol", email: "happy@gmail.com ", phoneno: "99376543 ", dob: "26-01-1997 ", gender: " Male"
},]
const initialValues={
  id:null, fullname:" " , email:" ", phoneno:" " , dob:" ", gender:" "
}
const [users, setUsers] = useState(data);
const [editing, setEditing] = useState(false);
const [currentUser, setCurrentUser] = useState(initialValues);
const addUser = (user) => {
  user.id = user.length + 1;
  setUsers([...users, user])
}

const deleteUser = (id) => {
  setEditing(false);
  setUsers(users.filter((user) => user.id !== id))
}
const editRow = (user) => {
  setEditing(true);
  setCurrentUser({ id: user.id, fullname: user.fullname, email: user.email, phoneno:user.phoneno ,dob:user.dob,gender: user.gender});

}
const updateUser = (id, updatedUser) => {
  setEditing(false);
  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
}

  return (
    <div className="App" style={myStyle}>
      <br /><br />

      {editing ? (
        <fragment>
          <h2>Edit user</h2>
          <Edit setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
        </fragment>
      ) : (
        <fragment>
          <h2>Add user</h2><br />
          <SignUp addUser={addUser} />
        </fragment>
      )
      }
      <br />
      <h2>View users</h2><br />
      <User  users={users} editRow={editRow} deleteUser={deleteUser} />
    </div>
  );
}

export default App;

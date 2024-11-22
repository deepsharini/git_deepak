import './App.css';
import {useEffect, useState} from 'react';
import {Button , EditableText, InputGroup, Toaster} from '@blueprintjs/core'

const appToaster = Toaster.create({
  position: "top",
})
function App() {
    const [users, setUsers] = useState([]);
    const [newuser, Setnewuser] = useState("");
    const [newmail, setNewmail] = useState("");
    const [newWebsite, SetNewwebsite] = useState("");

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((json)=> setUsers(json))
  },[])

  

  function adduser(){
     const name = newuser.trim();
     const email =newmail.trim();
     const website = newWebsite.trim();

     if(name && email && website) {
        fetch("https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify({
               name,
               email,
               website
            }),
            headers: {
              "content-type": "application/json; charset = UTF-8"
            }
          }
        ).then((response)=> response.json()) 
        .then((data) =>{
          setUsers([...users,data])
          appToaster.show({
            message:"user added sucessfully",
            intent: "success",
            timeout:3000
          })
          Setnewuser("")
          SetNewwebsite("")
          setNewmail("")
        }) 
     }
  }
  
  function onchangeHandler(id , key , value){
    setUsers((users)=>{
      return users.map((user)=> {
       return user.id === id ? {...user, [key]: value} : user;
       })
    })   
  }
  
  function updateUser (id){
      const user = users.find((user)=> user.id === id)
      fetch("https://jsonplaceholder.typicode.com/users",
        {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "content-type": "application/json; charset = UTF-8"
          }
        }
      ).then((response)=> response.json()) 
      .then((data) =>{
        setUsers([...users,data])
        appToaster.show({
          message:"user added sucessfully",
          intent: "success",
          timeout:3000
        })
      }) 
  }

   function deleteUser(id){ 
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "delete",
      }
    ).then((response)=> response.json()) 
    .then(() =>{
       setUsers((users)=> {
       return  users.filter((user)=> user.id !== id)
       } )
      appToaster.show({
        message:"user deleted sucessfully",
        intent: "success",
        timeout:3000
      })
    }) 
   }
  return (
<div className="App">
  <table className='bp4-html-table modifier'>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
      </thead>
      <tbody>
        {users.map((user) => 
        <tr key={user.id}>
            <td>{user.id}</td>
            <td><EditableText onChange={value=> onchangeHandler(user.id, "name", value)} value={user.name}/></td>
            <td><EditableText onChange={value => onchangeHandler(user.id,"email", value)} value={user.email}/></td>
            <td><EditableText onChange={value => onchangeHandler(user.id,"website", value)} value={user.website}/></td>
            <td>
              <Button onClick={()=> updateUser(user.id)} intent='primary'>update</Button>
              &nbsp;
              <Button onClick={()=> deleteUser(user.id)} intent='danger'>Delete</Button>
            </td>
        </tr>)}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td><InputGroup  value={newuser}
                        onChange={(e)=> Setnewuser(e.target.value)} placeholder='enter Name'/></td>
        
          <td><InputGroup name='email' value={newmail}
                        onChange={(e)=> setNewmail(e.target.value)} placeholder='enter email'/></td>
        
          <td><InputGroup name='website' value={newWebsite}
                        onChange={(e)=> SetNewwebsite(e.target.value)} placeholder='enter website'/></td>

          <td><Button onClick={adduser} intent='success'>add user</Button></td>
        </tr>
      </tfoot>
  </table>
</div>
  );
}

export default App;

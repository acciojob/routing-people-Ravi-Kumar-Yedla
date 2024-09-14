
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Userdetail from "./Userdetail";
import UserList from "./Userlist";


const users = [
  {id:1, Name:'ravi',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:2, Name:'shiva',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:3, Name:'suraj',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:4, Name:'naveen',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:5, Name:'madhu',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'}
]


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path = "/" element = {<UserList users={users} />}/>
          <Route path = "/users/:id" element = {<Userdetail users={users} />}/>
        </Routes>
    
    </Router>
  )
}

export default App

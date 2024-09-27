
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Userdetail from "./Userdetail";
import UserList from "./Userlist";


const users = [
  {id:1, Name:'Leanne Graham',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:2, Name:'Ervin Howell',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:3, Name:'Clementine Bauch',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  {id:4, Name:'Patricia Lebsack',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'},
  // {id:5, Name:'madhu',Username:'sam',Email:'ravi@123.com',Phone:'756-944-34-31',Website:'ravi.org'}
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

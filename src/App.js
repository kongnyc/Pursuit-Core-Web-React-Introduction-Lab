import React from 'react';
import NavBar from "./components/navBar/navBar"
import PostList from './components/postList/postList'
import './App.css';

function App() {
  return (
      // console.log({url,urlName})  
    <div className="App">
      <NavBar links = {[{urlName:"What is Pursuit",urlLink:"2"},{urlName:"Create an account",urlLink:"2"},{urlName:"Sign in",urlLink:"2"}]}/>
      
      <PostList post = {[{post_id:"1", title:"Title 1",content:"content is here"},{post_id:"2", title:"Title 2",content:"content2 is here"},{post_id:"3", title:"Title 3",content:"content3 is here"},]}/>
      {/* <PostList /> */}
    </div>

  );
}

export default App;

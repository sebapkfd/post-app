import React from 'react'
import Input from './components/Input';
import PostList from './components/postsList';
import './App.css';

function App() {

  return (
    <div className="App">
      <PostList/>
      <Input/>
    </div>
  );
}

export default App;
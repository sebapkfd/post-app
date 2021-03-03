import React from 'react'
import Search from './components/Search';
import Input from './components/Input';
import PostList from './components/postsList';
import './App.css';

function App() {

  return (
    <div className="App">
      <Search/>
      <PostList/>
      <Input/>
    </div>
  );
}

export default App;
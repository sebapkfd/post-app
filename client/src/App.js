import React, {useEffect, useState} from 'react'
import Input from './components/Input';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch('http://localhost:5000/', {mode: 'cors'});
      const dataJson = await data.json();
      setPosts([...dataJson])
      console.log(dataJson);
      return 'xd';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>{'xd'}</h1>
      <Input/>
    </div>
  );
}

export default App;
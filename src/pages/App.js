import Amplify, { API, Auth } from 'aws-amplify';
import React, { useState } from 'react';
import awsconfig from '../aws-exports';
import logo from './logo.svg';
import './App.css';

Amplify.configure(awsconfig);
API.configure(awsconfig);
Auth.configure(awsconfig);

const myAPI = "eveAPI"
const path = '/items';

function App() {

  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  function getItem(e) {
    let itemID = e.input
    API.get(myAPI, path + "/" + itemID)
      .then(response => {
        console.log(response)
        let newItems = [...items]
        newItems.push(response)
        setItems(newItems)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <h1>Super Simple React App</h1>
      <div>
        <input placeholder="item id" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <br />
      <button onClick={() => getItem({ input })}>Get Item From Backend</button>

      <h2 style={{ visibility: items.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
        items.map((thisItem, index) => {
          return (
            <div key={thisItem.id}>
              <span><b>ItemId:</b> {thisItem.id} - <b>ItemName</b>: {thisItem.name}</span>
            </div>)
        })
      }
    </div>
  );
}

export default App;

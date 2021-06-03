import React, { useState, useEffect } from 'react';
import '../App.css';
import { Header, ListItem, Segment, Button } from 'semantic-ui-react'

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchList()
  },[]);

  const fetchList = async () => {
    const response = await fetch('http://localhost:8000/api/entries/home', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const data = await response.json()
    await setList(data.data)
    console.log(list)
  }
  
  const handleClick = (event) => {
    console.log('CLICK')
  }

  return(
    list.map((entry, i) => {
      return (
        // <div onClick={handleClick}>
        <Segment key={i} onClick={handleClick}>
          <Header as='h1' textAlign='left' key={i}>{entry.title}</Header>
          <Header as='h2' textAlign='left'>{entry.date}</Header>
          <p>{entry.description}</p>
          <p>{entry.decision}</p>
          <aside>{entry.keywords}</aside>
        </Segment>
        // </div>
      );
    })
  )
}

export default List;
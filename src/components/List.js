import React, { useState, useEffect } from 'react';
import '../App.css';
import { Header, ListItem, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function List() {
  const [list, setList] = useState([])
  const [id, setId] = useState([])
  // const [toggle, setToggle] = useState(false)

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
    // console.log(list)
  }

  const makeRequest = (event, id) => {
    event.preventDefault()
    const url = 'http://localhost:8000/api/entries/' + id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    // console.log(id)
    // console.log(url)
    // setId(id)
    // location.href = 'http://localhost:3000/' + id
  }

  return(
    list.map((entry, i) => {
      return (
        <Segment key={i} onClick={(event) => makeRequest(event, entry.id)}>
          <Link to={`${entry.id}`}>
            <Header as='h1' textAlign='left' key={i}>{entry.title}</Header>
            <Header as='h2' textAlign='left'>{entry.date}</Header>
            <p>{entry.description}</p>
            <p>{entry.decision}</p>
            <aside>{entry.keywords}</aside>
          </Link>
        </Segment>
      );
    })
  )
}

export default List;
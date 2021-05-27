import React, { useState, useEffect } from 'react';
import '../App.css';
import { Header, Segment } from 'semantic-ui-react'

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchList()
  },[]);

  const fetchList = async () => {
    const data = await fetch('http://localhost:8000/')
    console.log(data)
  }

  return (
    <Segment>
      <Header as='h1' textAlign='left'>List</Header>
    </Segment>
  );
}

export default List;
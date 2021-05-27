import React, { useState, useEffect } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom'
import { Container, Menu, Button, Header } from 'semantic-ui-react'

function Nav(props) {
  return (
    <>
      <Menu basic inverted size='large' padded='very'>
        <Header as='h2' color='pink' className='app-title' textAlign='justified'>The Cases Diary</Header>
        <Container>
          <Menu.Item href='/home'>Home</Menu.Item>
          <Menu.Item position='right'>Hello, {props.user}</Menu.Item>
          <Menu.Item position='right'>
            <Button href='/logout' padded='very' method='DELETE'>Logout</Button>
          <>
            <Button href='/register'>Sign Up</Button>
            <Button href='/login'>Log In</Button>
          </>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}

export default Nav;
import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Container, Menu, Button } from 'semantic-ui-react'

function Organize() {
  return (
    <>
      <Menu basic inverted size='large'>
        <h2 class='app-title'>The Cases Diary</h2>
        <Container>
          <Menu.Item href='/home'>Home</Menu.Item>
          <Menu.Item position='right'>
            Hello, John
            <Button href='/users/logout' method='DELETE'>Logout</Button>
          <>
            <Button href='/users/register'>Sign Up</Button>
            <Button href='/users/login'>Log In</Button>
          </>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}

export default Organize;
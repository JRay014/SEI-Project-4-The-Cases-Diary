import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react'

function ConfirmDelete(props) {
    const [title, setTitle] = useState('')
    
    const fetchCase = async () => {
        const response = await fetch('http://localhost:8000/api/entries/' + props.match.params.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json()
        setTitle(data.data.title)
        
    }

    return (
        <>
            <h3>Are you sure you want to delete {title}</h3>

            <Button secondary floated='right'>Delete</Button>
            <Button primary floated='right' href='/:id'>Cancel</Button>
        </>
    );
}

export default ConfirmDelete;
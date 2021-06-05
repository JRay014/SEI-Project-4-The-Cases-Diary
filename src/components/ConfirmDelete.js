import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react'

function ConfirmDelete(props) {
    const [id, setId] = useState(props.match.params.id)
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetchCase()
    },[]);
    
    const fetchCase = async () => {
        const response = await fetch('http://localhost:8000/api/entries/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json()
        setTitle(data.data.title)  
    }

    const deleteCase = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/api/entries/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }) 
    }

    return (
        <>
            <h3>Are you sure you want to delete {title}</h3>

            <Button secondary onClick={deleteCase} href='/home'>Delete</Button>
            <Button primary href={`/${id}`}>Cancel</Button>
        </>
    );
}

export default ConfirmDelete;
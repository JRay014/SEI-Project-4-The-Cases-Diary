import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react'

function Case(props) {
    const [id, setId] = useState(props.match.params.id)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [decision, setDecision] = useState('')
    const [keywords, setKeywords] = useState([])
    
    
    useEffect(() => {
        fetchCase()
        // setId(props.match.params.id)
        // console.log(props)
    },[]);
    
    const fetchCase = async () => {
        // console.log(id)
        // console.log(props.match.params)
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/entries/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json()
        setTitle(data.data.title)
        setDate(data.data.date)
        setDescription(data.data.description)
        setDecision(data.data.decision)
        setKeywords(data.data.keywords)
    }

    return (
        <>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{description}</p>
            <p>{decision}</p>
            <aside>{keywords}</aside>

            <Button secondary floated='right' href={`/delete/${id}`}>Delete</Button>
            <Button primary floated='right' href={`/edit/${id}`}>Edit</Button>
        </>
    );
}

export default Case;
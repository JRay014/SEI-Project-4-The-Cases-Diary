import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Form, Header } from 'semantic-ui-react'

function EditCase(props) {
    const [id, setId] = useState(props.match.params.id)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [decision, setDecision] = useState('')
    const [keywords, setKeywords] = useState([])

    useEffect(() => {
        fetchCase()
    },[]);
    
    const fetchCase = async () => {
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

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
        // console.log(event.target.value)
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value)
        // console.log(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
        // console.log(event.target.value)
    }

    const handleChangeDecision = (event) => {
        setDecision(event.target.value)
        // console.log(event.target.value)
    }

    const handleChangeKeywords = (event) => {
        setKeywords(event.target.value)
        // console.log(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(process.env.REACT_APP_API_URL + '/api/entries/' + id, {
                method: 'PUT',
                body: JSON.stringify({
                    title: title,
                    date: date,
                    description: description,
                    decision: decision,
                    keywords: keywords
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            // console.log(data)
            // setTitle(data.title)
            // setDate(data.date)
            // setDescription(data.description)
            // setDecision(data.decision)
            // setKeywords(data.keywords)
        }
        catch (err) {
            console.log('error: ', err)
        }
        props.history.push(`/${id}`);
    }

    return (
        <>
            <Header>Edit {title}</Header>
            <Form>
                <Form.Field>
                    <label>Edit Title</label>
                    <input value={title} onChange={(evt) => handleChangeTitle(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Edit Date</label>
                    <input value={date} onChange={(evt) => handleChangeDate(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Edit Description</label>
                    <input value={description} onChange={(evt) => handleChangeDescription(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Edit Decision</label>
                    <input value={decision} onChange={(evt) => handleChangeDecision(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Edit Keywords</label>
                    <input value={keywords} onChange={(evt) => handleChangeKeywords(evt)} />
                </Form.Field>
            
                <Button type='submit' onClick={handleSubmit}>Edit Case</Button>
            </Form>
            <Button primary floated='right' href={`/${id}`}>Cancel</Button>
        </>
    )
}

export default EditCase;
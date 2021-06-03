import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Form, Header } from 'semantic-ui-react'

function EditCase(props) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [decision, setDecision] = useState('')
    const [keywords, setKeywords] = useState([])

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeDecision = (event) => {
        setDecision(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeKeywords = (event) => {
        setKeywords(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/entries/home', {
                method: 'POST',
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
            const data = await response.json()
            console.log(data)
            // setTitle(data.title)
            // setDate(data.date)
            // setDescription(data.description)
            // setDecision(data.decision)
            // setKeywords(data.keywords)
        }
        catch (err) {
            console.log('error: ', err)
        }
    }

    return (
        <>
            <Header>Add A New Case</Header>
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(evt) => handleChangeTitle(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input placeholder='Date' onChange={(evt) => handleChangeDate(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' onChange={(evt) => handleChangeDescription(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Decision</label>
                    <input placeholder='Decision' onChange={(evt) => handleChangeDecision(evt)} />
                </Form.Field>
                <Form.Field>
                    <label>Keywords</label>
                    <input placeholder='Keywords' onChange={(evt) => handleChangeKeywords(evt)} />
                </Form.Field>
            
                <Button type='submit' onClick={handleSubmit} Redirect to='/home'>Submit</Button>
            </Form>
        </>
    )
}

export default EditCase;
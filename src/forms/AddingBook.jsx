import React from 'react';
import { useState } from 'react';
import './form.css';

const AddingBook = () => {
    const [book, setBook] = useState({
        category: '',
        title: '',
        id: '',
        author: '',
        description: '',
    })

    const handleChange = (e)=> {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/bookAdded', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: book.category,
                title: book.title,
                id: book.id,
                author: book.author,
                description: book.description,
            })
        })

        const backendResp = await response.json();
        console.log("RESP",backendResp);
    }

  return (
    <div>
        <form className='form'>
            <div className='form-row'>
                <label>Category</label>
                <input type='text' name='category' value = {book.category} onChange = {handleChange} />
            </div>

            <div className='form-row'>
                <label>Title of the Book</label>
                <input type='text' name='title' value = {book.title} onChange = {handleChange} />
            </div>

            <div className='form-row'>
                <label>Book Id</label>
                <input type='text' name='id' value = {book.id} onChange = {handleChange} />
            </div>

            <div className='form-row'>
                <label>Author's Name</label>
                <input type='text' name='author' value = {book.author} onChange = {handleChange} />
            </div>

            <div className='form-row'>
                <label>Description</label>
                <input type='text' name='description' value = {book.description} onChange = {handleChange} />
            </div>

            <button className='form-btn' onClick = {handleSubmit}>ADD</button>
        </form>
    </div>
    
  )
}

export default AddingBook
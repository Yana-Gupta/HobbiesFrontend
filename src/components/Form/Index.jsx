import React from 'react';
import { Button, Container, TextareaAutosize, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Index.scss'
import axios from 'axios';


function Form() {
    async function handleClick(event) {
        event.preventDefault();
        await axios
            .post('http://localhost:4000/', {
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                hobbies: event.target.hobbies.value,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <Container>
            <form
                method='post'
                id='form'
                className='form'
                onSubmit={handleClick}>
                <TextField
                    variant='filled'
                    type='text'
                    id='name'
                    name='name'
                    className='input'
                    label='Name'
                    fullWidth
                    required />
                <Container className='form-container'>
                    <TextField
                        variant='outlined'
                        label='Email'
                        type='email'
                        id='email'
                        name='email'
                        className='input' fullWidth
                        required />
                    <TextField
                        variant='standard'
                        label='Phone No'
                        type='tel'
                        id='phone'
                        name='phone'
                        className='input'
                        fullWidth
                        required />
                </Container>

                <TextareaAutosize
                    minRows={9}
                    variant='standard'
                    placeholder='Hobbies'
                    type=''
                    id='hobbies'
                    className='input'
                    name='hobbies'
                    required />
                <Button
                    variant='contained'
                    type='submit'
                    id='btn' className='btn'
                    sx={{
                        padding: '12px 4px',
                        width: '100px'
                    }}>
                    Send&nbsp;<SendIcon />
                </Button>
            </form >
        </Container>
    )
}

export default Form
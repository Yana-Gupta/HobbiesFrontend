import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import {
    Button,
    TextField,
    Typography,
    Container,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
import axios from "axios";

const URL = "http://localhost:4000"

export default function UpdateForm() {
    const [openForm, setOpenForm] = useState(false);
    function handleSubmit(event) {
        axios.put(URL, {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            hobbies: event.target.hobbies.value,
        })
            .then(res => console.log(res))
            .catch(err => console.log("Error putting: ", err))
    }
    return (
        <Container>
            <Button variant="contained"
                sx={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '40px',
                    borderRadius: '140px',
                    height: '65px',
                    backgroundColor: '#140900',
                }}
                onClick={() => { setOpenForm(true) }}>
                <UpdateIcon fontSize="large" />
            </Button>
            <Modal
                presentationStyle="FormSheet"
                isOpen={openForm}>
                <Container maxWidth="sm" sx={{
                    backgroundColor: 'white',
                }}>
                    <Button sx={{
                        position: 'absolute',
                        right: '0px',
                        top: '0px',
                        margin: '20px 20px',
                    }}
                        onClick={() => setOpenForm(false)}>
                        <CloseIcon />
                    </Button>
                    <Typography align="center" variant="h3">Update Entry</Typography>
                    <form id='form' className='form' onSubmit={handleSubmit}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '20px auto',
                            alignItems: 'center'
                        }}>
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
                        <TextField label="New Name" id="name" name="name" className="input" required fullWidth>

                        </TextField>
                        <TextareaAutosize
                            minRows={9}
                            variant='standard'
                            placeholder='New Hobbies'
                            type=''
                            id='hobbies'
                            className='input'
                            name='hobbies'
                            required />
                        <Button type="submit"
                            variant='contained'
                            id='btn' className='btn'
                            sx={{
                                padding: '12px 4px',
                                width: '100px'
                            }}>Update</Button>
                    </form>
                </Container>
            </Modal>
        </Container>
    );
}
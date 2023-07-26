import { useState } from 'react';

import { 
    Box, 
    Container, 
    Typography, 
    TextField, 
    Button 
 } from '@mui/material';

const Register = () => {
    const [registerValue, setRegisterValue] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    console.log(registerValue);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterValue({
            ...registerValue,
            [name]: value
        });
    }
    const handleRegister = () => {
        console.log(registerValue);
        // Here, you can implement the logic for submitting the registration data to your server/database
    }
    return (
        <Container maxWidth='xs'>
            <Box sx={{
                  margin: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
            }}>
                <Typography 
                variant="h5"
                sx={{
                    margin: '20px',
                }}
                >
                    Register
                </Typography>
                <Box component='form'
                    sx={{
                        display: 'grid',
                        gap: '20px'
                    }}
                >

                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='firstName'
                            type='text' 
                            label='First Name' 
                            placeholder='First Name' 
                        />
                    </div>

                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='lastName'
                            type='text' 
                            label='Last Name' 
                            placeholder='Last Name' 
                        />
                    </div>

                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='age'
                            type='number' 
                            label='age' 
                            placeholder='Age' 
                        />
                    </div>

                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='phoneNumber'
                            type='text' 
                            label='Phone number' 
                            placeholder='Phone number' 
                        />
                    </div>

                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='email'
                            type='email' 
                            label='Email' 
                            placeholder='Email' 
                        />
                    </div>
                    
                    <div>
                        <TextField 
                            fullWidth
                            onChange={handleInputChange}
                            name='password'
                            type='password' 
                            label='Password'
                            placeholder='Password'
                        />
                    </div>
                    
                    <div>
                        <Button variant='contained' onClick={handleRegister}>
                            Register
                        </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    )
};

export default Register;







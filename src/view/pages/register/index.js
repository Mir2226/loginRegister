import { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

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
                textAlign: 'center'
            }}>
                <Typography variant="h5">
                    Register
                </Typography>

                <Box component='form'
                    sx={{
                        display: 'grid',
                        gap: '20px',
                        margin: '10px'
                    }}
                >
                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='email'
                            type='email' 
                            label='Email' 
                            placeholder='Email' 
                        />
                    </div>

                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='firstName'
                            type='text' 
                            label='FirstName' 
                            placeholder='FirstName' 
                        />
                    </div>

                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='lastName'
                            type='text' 
                            label='LastName' 
                            placeholder='LastName' 
                        />
                    </div>

                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='phoneNumber'
                            type='text' 
                            label='PhoneNumber' 
                            placeholder='PhoneNumber' 
                        />
                    </div>

                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='age'
                            type='number' 
                            label='Age' 
                            placeholder='Age' 
                         />
                    </div>
                    
                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='password'
                            type='password' label='Password' placeholder='Password' />
                    </div>
                    <div>
                        <TextField fullWidth
                            onChange={handleInputChange}
                            name='confirmPassword'
                            type='password' label='Confirm Password' placeholder='Confirm Password' />
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

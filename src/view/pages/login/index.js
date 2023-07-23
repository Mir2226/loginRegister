import { useState } from 'react';

import {Box, Container, CssBaseline, Typography, TextField, Button} from '@mui/material';

const Login = () => {
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: ''
    });

    console.log(loginValue);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginValue({
            ...loginValue,
            [name]: value
        })
    }
    
    const handleLogin = () => {
        console.log(loginValue);
    }
    
    
    // // const handleLogin = (values) => {
    // //     console.log(values);
    // }
    return (
        <Container maxWidth='xs'>
            <Box sx={{}}>
                <Typography variant="h5">
                    Sign in
                </Typography>

                <Box component='form'
                    sx={{
                        display: 'grid',
                        gap: '20px'
                    }}
                >
                    <div>
                    <TextField fullWidth
                    onChange={handleInputChange}
                    name='email' 
                    type='email' label='Email' placeholder='Email'/>
                    </div>
                    <div>
                    <TextField fullWidth
                    onChange={handleInputChange}
                    name='password' 
                    type='password' label='Password' placeholder='Password'/>
                    </div>
                    <div>
                    <Button variant='contained' onClick={handleLogin}>
                        Login
                    </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    )
};

export default Login;
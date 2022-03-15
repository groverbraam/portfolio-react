import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Contact = () => {
    return (
        <>
            <Typography>I would love to hear from you</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Email address" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Enter your message" variant="outlined" />
                <input type="submit" />
            </Box>

        </>
    );
}
export default Contact;


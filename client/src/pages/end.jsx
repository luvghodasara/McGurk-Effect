import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function End () {
  return (
    <div className='instr'>
        <h1>Thank you for participating</h1>
        
        <Button variant='contained' color='success' as={Link} to='/' >Restart</Button>
    </div>
  );
};

export default End;

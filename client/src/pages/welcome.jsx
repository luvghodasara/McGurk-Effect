import React from 'react';
import Instructions from './instructions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';


function Welcome () {

    
  const [name, setName] = useState("");



  return (
    <div>
        <h1>Welcome to the experiment</h1>
        
        <div>
        <form>
          <label><h5>Participant ID:</h5>
            <input
              type="number" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='welcinp'
            />
          </label>
        </form>
        </div>
        <br></br>
        <Button variant="contained" onClick={()=>{window.localStorage.setItem('uid',name)}} as={Link} to = "/instruction " className='buton'>Continue</Button>
    </div> 
  );
};


export default Welcome;


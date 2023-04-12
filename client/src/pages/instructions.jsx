import React from 'react';
import { Link } from 'react-router-dom';
import Testvideos from "./testvideos";
import Welcome from './welcome';
import handle from '../components/insternalLinks';
import { Button } from '@mui/material';

const Instructions = () => {
  return (
    <div className='instr'>
        <h1>Instructions</h1>
    <h3>1. You will be shown a video of a person speaking different syllables</h3>
    <h3>2. The video will be played only once when you click play</h3>
    <h3>3. Notice the audio and video carefully</h3>
    <h3>4. Report your answer in the text box given right below the video</h3>
    <h3>5. Once you have written the answer, click the submit to move to the next video</h3>
    <h3>6. After completion of all videos, click on finsih to end the experiment</h3>
    <h3>7. Focus on the face</h3>
    <Button variant="contained" as={Link} to = "/videos">Continue</Button>
    </div>
  );
};

export default Instructions;

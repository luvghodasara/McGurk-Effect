import React, { useState, useRef } from 'react';
import End from '../pages/end';
import Button from '@mui/material/Button';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const videos = [
  { url: require('../videos/MULTI_SENSORY/GA/GA-KA.mp4'),  },
  { url: require('../videos/MULTI_SENSORY/same_voice/PA-PA.mp4'),  },
  { url: require('../videos/MULTI_SENSORY/TA/TA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-SA.mp4'),  },  
  // { url: require('../videos/MULTI_SENSORY/PA/PA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/BA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/ZA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/FA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/GA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/SA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/BA/BA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-PA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/TA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/DA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/DA/DA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/GA/GA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-FA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-TA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/KA-KA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/KA/KA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-DA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/PA/PA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/ZA/ZA-BA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-GA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/SA/SA-VA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/FA/FA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/TA/TA-ZA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/VA/VA-SA.mp4'),  },
  // { url: require('../videos/MULTI_SENSORY/same_voice/VA-VA.mp4'),  }
];

function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef(null);

  function togglePlayPause() {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playNextVideo() {
    var nextVideoIndex = currentVideoIndex + 1;
  
    if (nextVideoIndex >= videos.length) {
      setIsFinished(true);
    } else {
      setCurrentVideoIndex(nextVideoIndex);
      setIsPlaying(false);
      setIsFinished(false);
    }
  }  


  const [formData, setFormData] = useState({
    name: ''
  });

  // Update the state object whenever a form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)

    Axios.post('http://localhost:4000/api/save-data', {
        uid: window.localStorage.getItem('uid'),
        answer: formData.name
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }



  

  return (
    <div>
      <video ref={videoRef} src={videos[currentVideoIndex].url} width={1080} height={720} className='vidd' />
      <div className='vbut'>
        <h2>{videos[currentVideoIndex].name}</h2>
        <Button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
        {/* <Button >Next Video</Button> */}
        {isFinished && (

            <Button variant="contained" className='vfins' as={Link} to = "/end">Finish</Button>

        )}
      </div>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label className='lab'>What did the girl say?<br></br></label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}  className='formButton' />
        <br></br>
        <Button variant='contained' type="submit" className='vsub' onClick={playNextVideo}>Submit</Button>
      </form>
    </div>
  );
  
}


export default VideoPlayer;
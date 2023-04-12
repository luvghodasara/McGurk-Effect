import React from "react"
import Inputcomponent from '../components/userInput';
import VideoPlayer from '../components/videos';
import Response from "../components/response";


function Testvideos() {


    return (
      <div>
        <div className='video'><VideoPlayer /></div>
        {/* <div className='input'><Response /></div> */}
  
  
      </div>
  
    );
  }

  export default Testvideos;
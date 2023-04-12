import { Link } from 'react-router-dom'
import React from 'react'
import Button from './button'
import Welcome from '../pages/welcome'

const ComponentWithInternalLink= () => {

  return (
    <Button as={Link} to="/Welcome">Home</Button>
  );
}

export default ComponentWithInternalLink;
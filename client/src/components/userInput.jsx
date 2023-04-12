import React, { useState } from 'react';

import { createClient } from '@supabase/supabase-js';

function UserInputForm() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new row in the 'users' table
    createClient
      .from('Response')
      .insert({ name })
      .then(() => {
        console.log('New user inserted');
      })
      .catch((error) => {
        console.error('Error inserting user', error);
      });

    // Clear the input field
    setName('');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='give-name'>
        What did the girl say?<br></br>
        <input type="text" value={name} onChange={handleChange} /><br></br>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInputForm;
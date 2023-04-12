import e from 'express';
import React, { useState } from 'react';

function ContactForm() {
  const [uid, setUid] = useState('');
  const [responses, setResponses] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/save-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, responses })
    })
      .then(response => {
        if (response.ok) {
          alert('Data saved to MongoDB!');
        } else {
          alert('Error saving data to MongoDB');
        }
      })
      .catch(error => console.error(error));
  };

  const PostData = async (e) =>{
    e.preventDefault();

      const {uid, responses } = user;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uid:
        <input type="text" value={uid} onChange={e => setUid(e.target.value)} />
      </label>
      <label>
      Responses
        <input type="text" value={responses} onChange={e => setResponses(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

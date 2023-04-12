import React, { useState } from 'react';

function Response() {
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
    
    // Save the form data to a JSON file
    saveToJsonFile(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>What did the girl say?<br></br></label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

function saveToJsonFile(formData) {
  const data = JSON.stringify(formData, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'form-data.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  return(
    <div>
   

    </div>

  );
}

export default Response;
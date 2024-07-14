import React, { useState } from 'react'

function TextInput({ onNameChange, error }) {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
        onNameChange(e.target.value);
    };
  

  return (
    <div style={{ width: '100%' }} className='div-input'>
            <input
                type="text"
                id="name"
                placeholder='Enter Full Name'
                value={name}
                onChange={handleChange}
                required
                className={error ? 'error' : ''}
            />
            {error && <><br/> <small className="error-message">{error}</small></>}
        </div>
  )
}

export default TextInput

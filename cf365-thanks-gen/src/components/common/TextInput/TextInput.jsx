import React, { useState } from 'react'

function TextInput() {
    const [name, setName] = useState('');

  

  return (
    <div style={{width: '100%'}} className='div-input'>

    <input
          type="text"
          id="name"
          placeholder='Enter Your Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
    
    </div>
  )
}

export default TextInput

import React from 'react';

function TextInput({ value, onNameChange, error, support }) {
    const handleChange = (e) => {
        onNameChange(e.target.value);
    };

    return (
        <div style={{ width: '100%' }} className='div-input'>
            <input
                type="text"
                id="rollNum"
                placeholder='Enter Roll Number'
                value={value}
                onChange={handleChange}
                required
                className={`${error ? 'error' : ''} ${support ? 'support' : ''}`}

            />
            {error && <><br/><small className="error-message">{error}</small></>}
            {support && <><br/><small className="support-message">{support}</small></>}
        </div>
    );
}

export default TextInput;

import React, { useState } from 'react';
import './App.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    let chars = lowercaseChars + uppercaseChars + numberChars + specialChars;

    let generatedPassword = '';
    let length = 12;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className='container'>
      <h2>Password Generator</h2>
       
        <div className='input'>
          <input
          type='text'
          placeholder='Password'
          value={password}
          />
        </div>
              
      <button onClick={generatePassword}>Generate Password</button>
    
    </div>
  );
};

export default PasswordGenerator;


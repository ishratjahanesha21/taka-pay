import React from 'react';
import './Custom.css';

function CustomKeyboard({ onKeyPress }) {
  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', 'backspace', 'tick']
  ];

  return (
    <div className="custom-keyboard w-full">
      {rows.slice(0, 3).map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row mb-8">
          {row.map((key) => (
            <button key={key} onClick={() => onKeyPress(key)} className='key-button flex justify-center items-center'>
              {key === 'backspace' ? '⌫' : key}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row mb-8 last-row">
        
        <button onClick={() => onKeyPress('backspace')} className='key-button flex justify-center items-center'>
          ⌫
        </button>
        <button onClick={() => onKeyPress('0')} className='key-button flex justify-center items-center'>
          0
        </button>
        <button onClick={() => onKeyPress('tick')} className='key-button flex justify-center items-center text-pink-500'>
          ✔
        </button>
      </div>
    </div>
  );
}

export default CustomKeyboard;

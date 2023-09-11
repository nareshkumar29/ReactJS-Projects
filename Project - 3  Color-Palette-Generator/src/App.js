import React, { useState } from 'react';
import randomColor from 'randomcolor';
import './App.css'

function App() {
  const [colors, setColors] = useState([]);

  const generateColorPalette = () => {
    const newColors = randomColor({ count: 3, luminosity: 'random' });
    setColors(newColors);
  };

  return (
    <div className="App">
      <h3>Color Palette Generator</h3>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => navigator.clipboard.writeText(color)}
          >
            {color}
          </div>
        ))}
      </div>
      <button onClick={generateColorPalette}>Generate Palette</button>
    </div>
  );
}

export default App;


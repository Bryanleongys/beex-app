import React, { useState } from "react";
import "./App.css";
import ThreeScene from "./threejs/three-scene";
import Button from "./threejs/button.js";

function App() {
  const [selectedColor, setSelectedColor] = useState("#08ee33");
  return (
    <div>
      <div>
        <Button
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
      <ThreeScene selectedColor={selectedColor} />
    </div>
  );
}

export default App;

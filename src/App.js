import React, { useState } from "react";
import "./App.css";
import ThreeScene from "./threejs/three-scene";
import Button from "./threejs/button.js";
import ShootButton from "./threejs/shoot-button";

function App() {
  const [selectedColor, setSelectedColor] = useState("#08ee33");
  const [shoot, setShoot] = useState(false);
  return (
    <div>
      <ThreeScene selectedColor={selectedColor} shoot={shoot} />
      <Button
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
      {/* <ShootButton setShoot={setShoot} /> */}
    </div>
  );
}

export default App;

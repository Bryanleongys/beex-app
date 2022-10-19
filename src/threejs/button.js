const Button = ({ setSelectedColor, selectedColor }) => {
  const handleClick = () => {
    const colorArray = [
      "#08ee33",
      "#4d9385",
      "#75afd2",
      "#46aefc",
      "#cc3333",
      "#fbbaf7",
      "#ad97c4",
    ];
    setSelectedColor(
      colorArray[(colorArray.indexOf(selectedColor) + 1) % colorArray.length]
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default Button;

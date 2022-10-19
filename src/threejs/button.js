import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  margin: 10px;
  cursor: pointer;
  align-self: center;
`;

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
      <StyledButton onClick={handleClick}>Change Color</StyledButton>
    </div>
  );
};

export default Button;

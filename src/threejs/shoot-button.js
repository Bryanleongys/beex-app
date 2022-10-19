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

const ShootButton = ({ setShoot }) => {
  const handleClick = () => {
    setShoot(true);
  };
  return (
    <div>
      <StyledButton onClick={handleClick}>Shoot Button</StyledButton>
    </div>
  );
};

export default ShootButton;

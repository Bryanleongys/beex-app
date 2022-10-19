const Button = ({ setShoot }) => {
  const handleClick = () => {
    setShoot(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Shoot</button>
    </div>
  );
};

export default Button;

function Button() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;

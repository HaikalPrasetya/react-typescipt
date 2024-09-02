type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Button({ setCount }: ButtonProps) {
  return <button>Click Me</button>;
}

export default Button;

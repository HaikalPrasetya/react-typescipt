type ButtonProps = {
  onClick: (test: string) => number;
};

function Button({ onClick }: ButtonProps) {
  return <button>Button</button>;
}

export default Button;

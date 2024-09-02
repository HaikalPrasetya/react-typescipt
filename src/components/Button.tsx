type ButtonProps = {
  children: JSX.Element;
};

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;

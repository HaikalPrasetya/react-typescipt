type ButtonProps = {
  borderRadius: Record<string, string>; // Record<key, value> is the same as { key: value }
};

function Button({ borderRadius }: ButtonProps) {
  console.log(borderRadius);
  return <button>Button</button>;
}

export default Button;

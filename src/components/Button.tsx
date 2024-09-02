type TButtonProps = {
  type: "submit" | "reset" | "button";
  color: "primary" | "secondary";
};

type SuperButtonProps = TButtonProps & {
  variant: "primary" | "secondary";
};

function Button({ color, type, variant }: SuperButtonProps) {
  return <button>Click Me</button>;
}

export default Button;

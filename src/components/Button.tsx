// interface IButtonProps {
//   text: string;
//   count: number;
// }

// type TButtonProps = {
//   type: "submit" | "reset" | "button";
//   autoFocus?: boolean;
// };

// Alternative
type TButtonProps = React.ComponentProps<"button"> & {
  variant: "primary" | "secondary";
};

function Button({ type, autoFocus, variant, ...props }: TButtonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...props}>
      Click Me
    </button>
  );
}

export default Button;

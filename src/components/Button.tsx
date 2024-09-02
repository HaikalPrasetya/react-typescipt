// interface IButtonProps {
//   text: string;
//   count: number;
// }

// type TButtonProps = {
//   type: "submit" | "reset" | "button";
//   autoFocus?: boolean;
// };

// Alternative
type TButtonProps = React.ComponentProps<"button">;

function Button({ type, autoFocus, ...props }: TButtonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...props}>
      Click Me
    </button>
  );
}

export default Button;

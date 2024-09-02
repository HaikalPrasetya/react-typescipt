import { useRef } from "react";

function Button() {
  const ref = useRef<HTMLButtonElement>(null);
  return <button ref={ref}>Click Me</button>;
}

export default Button;

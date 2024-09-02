import { useEffect } from "react";

type ButtonColor = "red" | "green" | "blue";

function Button() {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor"
    ) as ButtonColor;
  }, []);

  return <button>ada</button>;
}

export default Button;

import { useState } from "react";

type User = {
  name: string;
};

function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click Me");
  const [isPrimary, setIsPrimary] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;

  return <button>Click Me</button>;
}

export default Button;

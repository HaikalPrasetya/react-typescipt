type User = {
  sessionId: string;
  name: string;
};

type Guest = Omit<User, "name">;

function Button() {
  return <button>ada</button>;
}

export default Button;

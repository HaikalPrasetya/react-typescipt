type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

function Button<T>({ countValue, countHistory }: ButtonProps<T>) {
  return <button>ada</button>;
}

export default Button;

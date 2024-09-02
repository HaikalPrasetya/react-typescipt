const buttonTextOptions = ["Click Me", "Click", "Click Here"] as const;

function Button() {
  return <button>{JSON.stringify(buttonTextOptions)}</button>;
}

export default Button;

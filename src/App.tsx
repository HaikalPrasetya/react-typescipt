import Button from "./components/button";

function App() {
  const onClick = (test: string) => {
    return 5;
  };

  return (
    <div>
      <Button onClick={onClick} />
    </div>
  );
}
export default App;

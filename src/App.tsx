import Button from "./components/button";

function App() {
  return (
    <div>
      <Button countValue={0} countHistory={[10, 20, 30]} />
    </div>
  );
}
export default App;

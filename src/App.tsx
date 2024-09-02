import Button from "./components/button";

function App() {
  return (
    <div>
      <Button
        type="submit"
        autoFocus={true}
        defaultValue={"Submit"}
        variant="primary"
      />
    </div>
  );
}
export default App;

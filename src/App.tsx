import Button from "./components/button";

function App() {
  return (
    <div>
      <Button
        borderRadius={{
          topLeft: "10px",
          topRight: "10px",
          bottomLeft: "10px",
          bottomRight: "10px",
        }}
      />
    </div>
  );
}
export default App;

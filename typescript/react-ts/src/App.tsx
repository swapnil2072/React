import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn Type"]}></Todos>
    </div>
  );
}

export default App;

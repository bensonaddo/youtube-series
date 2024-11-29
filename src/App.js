import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Node" />
      <Todo text="Learn MongoDB" />
    </div>
  );
}

export default App;

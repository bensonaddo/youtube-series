import "./App.css";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Node" />
      <Todo text="Learn MongoDB" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

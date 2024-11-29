const Todo = (props) => {
  const { text } = props;

  function deleteHandler() {
    console.log("Todo deleted!");
    console.log(text);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

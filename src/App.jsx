// components
import CustomForm from "./components/CustomForm";

function App() {
  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <h1>My Task List</h1>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;

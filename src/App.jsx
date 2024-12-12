// IMPOROT IL LINK DI BOOTSRAP
// import "bootstrap/dist/css/bootstrap.min.css";
// IMPORTO L'ARRAY DI TASKS
import tasks from "./data/menu";
// importo taskinprogress
function App() {
  // Current tasks
  function currentTasks() {
    // un array per le tasks in progress
    let tasksInprogress = tasks
      .filter((element) => element.state === "in_progress")
      .map((element) => (
        <li key={element.id}>
          <p>
            <strong>
              {element.title} <span> {element.state} </span>
            </strong>
          </p>
          <p>Priority :{element.priority}</p>
          <p>Est.time :{element.estimatedTime}</p>
        </li>
      ));
    // un altro array per le tasks in backlog
    let tasksBacklog = tasks
      .filter((element) => element.state === "backlog")
      .map((element) => (
        <li key={element.id}>
          <p>
            <strong>
              {element.title} <span className="yellow"> {element.state} </span>
            </strong>
          </p>
          <p>Priority :{element.priority}</p>
          <p>Est.time :{element.estimatedTime}</p>
        </li>
      ));
    // combino le due array
    const ledueTasks = [...tasksInprogress, ...tasksBacklog];

    return ledueTasks;
  }
  // tasks completed
  function tasksCompleted() {
    let tasksCompleted = tasks
      .filter((element) => element.state === "completed")
      .map((element) => (
        <li key={element.id}>
          <p>
            <strong>
              {element.title}
              <span className="green"> {element.state} </span>
            </strong>
          </p>
          <p>Priority :{element.priority}</p>
          <p>Est.time :{element.estimatedTime}</p>
        </li>
      ));

    return tasksCompleted;
  }
  // Prendo la lungezza del array degli tasks in progress & in backlog
  function currentTasksLength() {
    return currentTasks().length;
  }
  // prendo la lunguezza degli tasks completed
  function taskscompletedLength() {
    return tasksCompleted().length;
  }

  return (
    <>
      {/* header */}
      <header>
        <h1>Task manager</h1>
      </header>
      {/* Main */}
      <main>
        {/* tasks in progress */}
        <h3>Current tasks ({currentTasksLength()}) </h3>
        <ul> {currentTasks()} </ul>
        <hr />
        {/* tasks completed */}
        <h3> Completed tasks ({taskscompletedLength()}) </h3>
        <ul>{tasksCompleted()}</ul>
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import tasks from "./data/menu";
// importo taskinprogress
function App() {
  function tasksInprogresseBacklog() {
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
  // Prendo la lungezza del array degli tasks in progress & in backlog
  function tasksInprogresseBacklogLength() {
    return tasksInprogresseBacklog().length;
  }
  // prendo la lunguezza degli tasks completed
  function taskscompletedLength() {
    return tasksCompleted().length;
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

  return (
    <>
      <header>
        <h1>Task manager</h1>
      </header>
      <main>
        {/* tasks in progress */}
        <h3>Completed tasks ({tasksInprogresseBacklogLength()}) </h3>
        <ul> {tasksInprogresseBacklog()} </ul>
        <hr />
        {/* tasks completed */}
        <h3> Current tasks ({taskscompletedLength()}) </h3>
        <ul>{tasksCompleted()}</ul>
      </main>
    </>
  );
}

export default App;

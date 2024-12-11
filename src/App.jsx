import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import tasks from "./data/menu";
// importo taskinprogress
function App() {
  function tasksInprogress() {
    let tasksInprogress = tasks
      .filter((element) => element.state !== "completed")
      .map((element) => (
        <li key={element.id}>
          <p>
            <strong>{element.title} </strong>
          </p>
          <p>
            <strong>Priority : </strong>
            {element.priority}
          </p>
          <p>
            <strong>Est.time : </strong>
            {element.estimatedTime}
          </p>
        </li>
      ));

    return tasksInprogress;
  }
  // Prendo la lungezza del array degli tasks in progress
  function tasksInprogressLength() {
    return tasksInprogress().length;
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
            <strong>{element.title} </strong>
          </p>
          <p>
            <strong>Priority : </strong>
            {element.priority}
          </p>
          <p>
            <strong>Est.time : </strong>
            {element.estimatedTime}
          </p>
        </li>
      ));

    return tasksCompleted;
  }
  return (
    <>
      {/* tasks in progress */}
      <h1>Task manager</h1>
      <h3> completed tasks({tasksInprogressLength()}) </h3>
      <ul> {tasksInprogress()} </ul>
      {/* tasks completed */}
      <h3> Current tasks({taskscompletedLength()}) </h3>
      <ul> {tasksCompleted()} </ul>
    </>
  );
}

export default App;

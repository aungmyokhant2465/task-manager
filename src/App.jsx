import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Create from "./components/Create";
import TaskContextWrapper from "./context/withTaskCrud";
import Update from "./components/Update";

function App() {
  const [page, setPage] = useState(1);
  const [task, setTask] = useState({});

  const route = (p) => {
    setPage(p);
  };

  const routeToUpdate = (task) => {
    setPage(3);
    setTask(task);
  };

  return (
    <>
      <TaskContextWrapper>
        <nav>
          <ul>
            <li>
              <a onClick={() => setPage(1)}>All tasks</a>
            </li>
            <li>
              <a onClick={() => setPage(2)}>Create</a>
            </li>
          </ul>
        </nav>
        <main>
          <h1>Task Manager</h1>
          <div>
            {page === 1 && <TaskList route={routeToUpdate} />}
            {page === 2 && <Create route={route} />}
            {page === 3 && <Update route={route} task={task} />}
          </div>
        </main>
      </TaskContextWrapper>
    </>
  );
}

export default App;

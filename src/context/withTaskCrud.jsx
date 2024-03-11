/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const TaskContext = createContext();

const TaskContextWrapper = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Do task", status: false },
    { id: 2, name: "drink coffee", status: false },
  ]);

  const create = (task) => {
    console.log("create");
    setTasks([...tasks, task]);
  };

  const update = (task) => {
    console.log("update");
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  };

  const remove = (task) => {
    console.log("remove");
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, create, update, remove }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextWrapper;

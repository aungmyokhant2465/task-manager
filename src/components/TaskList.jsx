/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context/withTaskCrud";

export default function TaskList({ route }) {
  const { tasks, remove } = useContext(TaskContext);

  return (
    <section>
      <h2>All Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.done ? "Done" : "Not yet"}</td>
              <td>
                <button onClick={() => route(task)}>Edit</button>
                <button onClick={() => remove(task)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

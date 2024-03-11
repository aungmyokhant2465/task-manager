/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/withTaskCrud";

export default function Update({ task, route }) {
  const [name, setName] = useState(task.name);
  const { update } = useContext(TaskContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      name: name,
    };
    update(updatedTask);
    setName("");
    route(1);
  };

  return (
    <section>
      <h2>Update Task</h2>
      <form>
        <div>
          <label>Task Name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </section>
  );
}

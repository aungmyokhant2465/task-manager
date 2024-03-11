/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/withTaskCrud";

export default function Create({ route }) {
  const [name, setName] = useState("");
  const { create, tasks } = useContext(TaskContext);

  const handleCreate = (e) => {
    e.preventDefault();
    const task = {
      id: tasks[tasks.length - 1].id + 1,
      name: name,
      status: false,
    };
    create(task);
    setName("");
    route(1);
  };

  return (
    <section>
      <h2>Create Task</h2>
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
          <button onClick={handleCreate}>Add</button>
        </div>
      </form>
    </section>
  );
}

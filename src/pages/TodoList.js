import React, { useState } from "react";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  remove,
} from "firebase/database";
import { app } from "../Firebase/Firebase";
const TodoList = (user) => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDuration, setTaskDuration] = useState("");
  const invalidCharacterRegex = /[.$[\]]/g;
  const rawUsername = user.user.email.split("@")[0];
  const min = 10000; // Minimum five-digit number (inclusive)
  const max = 99999; // Maximum five-digit number (inclusive)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const username = rawUsername.replace(invalidCharacterRegex, "-");
  const getTask = () => {
    get(child(ref(db), `user/${username}`)).then((snapshot) => {
      const userData = snapshot.val();
      const newTasks = [];

      // Loop through the keys (e.g., 'a', 'b', 'c', etc.)
      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          const taskData = userData[key];
          const newTask = {
            name: taskData[0],
            duration: taskData[1],
          };
          newTasks.push(newTask);
        }
      }
      setTasks([...newTasks]);
      console.log(tasks);

      // setTasks([...tasks, ...newTasks]);
      // Update the tasks state with all retrieved tasks
    });
  };

  const addTask = () => {
    if (taskName.trim() === "" || taskDuration.trim() === "") {
      return;
    }

    const newTask = {
      name: taskName,
      duration: taskDuration,
    };
    // console.log(user.user.email.split("@")[0]);
    // putData(`user/${user.user.email.split("@")[0]}/`, taskDuration);
    putData(`user/${username}/${taskName}`, [taskName, taskDuration]);

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDuration("");
  };

  const deleteTask = (index) => {
    const databaseRef = ref(db, `user/${username}/${tasks[index].name}`);
    remove(databaseRef)
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    console.log();
    setTasks(updatedTasks);
  };

  const db = getDatabase(app);
  const putData = (key, data) => {
    set(ref(db, key), data);
  };

  const refreshFor = (dependsOn) => {
    onValue(ref(db, dependsOn), (snapshot) => console.log(snapshot.val()));
  };

  return (
    <div className="bg-cyan-50 py-24">
      <div className="w-3/4 mx-auto mb-2 text-center p-8 md:p-20 bg-purple-200 rounded shadow-lg">
        <h2 className="text-4xl md:text-6xl mb-10  text-purple-900 font-extrabold">
          Your Routine
        </h2>
        <div className="mb-8 flex flex-col gap-5 md:flex mb:justify-between md:gap-7 md:flex-row">
          <input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border rounded p-2 w-full md:w-1/3 hover:bg-cyan-50"
          />
          <input
            type="text"
            placeholder="Duration (in minutes)"
            value={taskDuration}
            onChange={(e) => setTaskDuration(e.target.value)}
            className="border rounded p-2 w-full md:w-1/3 hover:bg-cyan-50"
          />
          <button
            onClick={addTask}
            className="bg-cyan-50 text-white px-7 rounded-2xl hover:bg-cyan-200 text-2xl"
            // className="text-2xl"
          >
            ✔
          </button>
          <button
            onClick={getTask}
            className="bg-cyan-50 text-white px-7 rounded-2xl hover:bg-cyan-200 text-2xl"
            // className="text-2xl"
          >
            🔃
          </button>
        </div>

        <table className="w-full border-collapse text-center font-mono">
          <thead>
            <tr>
              <th className="border p-2 text-white bg-purple-700">Task</th>
              <th className="border p-2 text-white bg-purple-700">Duration</th>
              <th className="border p-2 text-white bg-purple-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="odd:bg-purple-50 even:bg-purple-100">
                <td className="border p-2">{task.name}</td>
                <td className="border p-2">{task.duration}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-white-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;

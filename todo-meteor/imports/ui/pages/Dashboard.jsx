import React from "react";
import { Header } from "../components/common/Header";
import { Task } from "../components/Task";

const tasks = [
  { _id: 1, text: "First Task", priority: 1, duedate: "01/01/2027" },
  { _id: 1, text: "Fourth task", priority: 2, duedate: "01/01/2027" },
  { _id: 2, text: "Second Task", priority: 2, duedate: "01/01/2027" },
  { _id: 3, text: "Third Task", priority: 3, duedate: "01/01/2027" },
];

let ordered_tasks = tasks.sort((a, b) => a.priority - b.priority);

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-header">
        <div className="dashboard-header-informations">
          <h4>XX/XX/XX</h4>
          <h4>9 tarefas</h4>
          <h3>Dashboard X</h3>
        </div>
      </div>

      <div className="dashboard">
        {ordered_tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

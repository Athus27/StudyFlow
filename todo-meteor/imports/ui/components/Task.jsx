import React from "react";

export const Task = ({ task }) => {
  return (
    <div className="task-table">
      <table>
        <tr>
          <th>PRIORITY</th>
          <th>TASK</th>
        </tr>

        <tr>
          <td> {task.priority}</td>
          <td>{task.text}</td>
        </tr>
      </table>
    </div>
  );
};

import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const activeTask = props.tasks.filter((item) => item.active);
  const doneTask = props.tasks.filter((item) => !item.active);

  doneTask.sort((a, b) => b.finishDate - a.finishDate);
  activeTask.sort((a, b) => b.text - a.text);

  const taskToDo = activeTask.map((task) => (
    <Task
      key={task.id}
      text={task.text}
      date={task.date}
      id={task.id}
      important={task.important}
      active={task.active}
      trash={props.trash}
      doneTask={props.done}
      finishDate={task.finishDate}
      changeTask={props.changeTask}
    />
  ));

  const doneTasks = doneTask.map((task) => (
    <Task
      key={task.id}
      text={task.text}
      date={task.date}
      id={task.id}
      active={task.active}
      trash={props.trash}
      doneTask={props.done}
      important={task.important}
      finishDate={task.finishDate}
      changeTask={props.changeTask}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>Task to do:</h2>
        {taskToDo.length > 0 ? (
          taskToDo
        ) : (
          <p className="message">There are no tasks to be performed</p>
        )}
      </div>
      <div className="done">
        <h3>
          Done Task: <span style={{ color: "crimson" }}>{doneTask.length}</span>{" "}
          {doneTask.length > 3 && <p>Shows only 3 last tasks</p>}
        </h3>
        {doneTasks.length > 0 ? (
          doneTasks.slice(0, 3)
        ) : (
          <p className="message">List of done tasks</p>
        )}
      </div>
    </>
  );
};

export default TaskList;

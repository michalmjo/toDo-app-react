import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";

import "./App.css";
class App extends Component {
  state = {
    activeIndex: "",
    textPopup: "",
    isActive: false,
    task: [
      {
        id: 0,
        text: "to do 1 ",
        date: "2023-11-11",
        important: "planned",
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "to do 3",
        date: "2023-11-14",
        important: "priority",
        active: true,
        finishDate: null,
      },
    ],
  };

  currentId = 2;

  deleteTask = (id) => {
    const task = [...this.state.task];
    const index = task.findIndex((task) => task.id === id);
    task.splice(index, 1);
    this.setState({
      task,
    });
  };

  doneTask = (id) => {
    console.log("changestatustaks " + id);
    const task = [...this.state.task];
    task.forEach((item) => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().getTime();
      }
    });

    this.setState({
      task,
    });
  };

  showChangeArea = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  changeTextInput = (value) => {
    const index = this.state.activeIndex;

    const table = [...this.state.task];
    table.forEach((item) => {
      if (item.id === index) {
        item.text = value;
      }
      this.setState({
        task: table,
        isActive: false,
      });
    });

    console.log(value);
  };
  handleChangeTask = (e, id) => {
    const index = id;
    console.log(index);
    this.setState({
      activeIndex: index,
    });
    let text = e.currentTarget.parentNode
      .closest(".task_area")
      .querySelector("strong").textContent;

    this.showChangeArea();
    this.setState({
      textPopup: text,
    });

    console.log(
      e.currentTarget.parentNode.closest(".task_area").querySelector("strong")
    );
  };

  addTask = (text, typeTask, date) => {
    console.log(text, typeTask, date);
    const task = {
      id: this.currentId,
      text,
      date,
      important: typeTask,
      active: true,
      finishDate: null,
    };
    this.currentId++;
    this.setState((prevState) => ({
      task: [...prevState.task, task],
    }));
    // this.setState({});

    return true;
  };
  render() {
    const activeTasks = this.state.task.filter((item) => item.active);
    const remainingTasks = activeTasks.length
      ? activeTasks.length
      : "Nie masz więcej zadań";
    return (
      <>
        <div className="app">
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="290"
              viewBox="0 0 330 290"
            >
              <ellipse
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="165"
                cy="145"
                rx="165"
                ry="145"
                fill="#5051e6"
              />
            </svg>
          </div>
          <div className="smallCircle_one"></div>
          <div className="smallCircle_two"></div>
          <header>
            <h1>ToDoApp</h1>
            <h2 className="header_title">
              {remainingTasks > 0
                ? `You have ${remainingTasks} remaining task`
                : `You dont have any task`}{" "}
            </h2>
          </header>
          <AddTask addTask={this.addTask} />
          <TaskList
            tasks={this.state.task}
            trash={this.deleteTask}
            done={this.doneTask}
            changeTask={this.handleChangeTask}
          />
          {this.state.isActive ? (
            <TaskEdit
              editText={this.state.textPopup}
              changeTextInput={this.changeTextInput}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";

import Popup from "./Popup";

import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  allTask = [];
  state = {
    text: "",
    typeTask: null,
    date: this.minDate,
    popup: false,
  };

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleChangePriority = (e) => {
    const target = e.currentTarget.getAttribute("data-priority");
    const task = document.querySelector(`[data-priority=${target}]`);
    this.allTask = document.querySelectorAll(".type__task-priority");
    this.allTask.forEach((task) => task.classList.remove("active"));

    // task.forEach((task) => console.log(task.classList));

    if (target === "planned") {
      task.classList.add("active");

      if (task.className === "type__task-priority") {
        this.setState({
          typeTask: "",
        });
      } else {
        this.setState({
          typeTask: target,
        });
      }
    } else if (target === "priority") {
      task.classList.add("active");

      if (task.className === "type__task-priority") {
        this.setState({
          typeTask: "",
        });
      } else {
        this.setState({
          typeTask: target,
        });
      }
    }
  };

  popupInput = () => {
    this.setState({
      popup: true,
    });
  };

  handleAddTask = () => {
    const { text, typeTask, date } = this.state;
    if (text.length > 2 && text.trim(" ")) {
      const task = this.props.addTask(text, typeTask, date);
      if (task) {
        this.allTask.forEach((task) => task.classList.remove("active"));
        this.setState({
          text: "",
          typeTask: "",
          date: this.minDate,
        });
      }
    } else {
      console.log("za malo znaków");
      this.popupInput();
      setTimeout(() => {
        this.setState({
          popup: false,
        });
      }, 2500);
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <div className="task__add">
          <h2 className="task__add-header">Create New Task</h2>
          <input
            className="task__input"
            type="text"
            placeholder="Add task..."
            value={this.state.text}
            onChange={this.handleValueChange}
          />
          <h3 className="task__add-header-choise">Chose date</h3>
          <div className="date-area">
            <div className="calendar">
              {" "}
              <i className="far fa-calendar-alt"></i>
            </div>
            <div className="task__date">
              <label htmlFor="">
                <input
                  className="task__input"
                  type="date"
                  min={this.minDate}
                  max={maxDate}
                  value={this.state.date}
                  onChange={this.handleChangeDate}
                />
              </label>
            </div>
          </div>
          <h3 className="task__add-header-choise">Task type</h3>
          <div className="type__task">
            <div
              onClick={this.handleChangePriority}
              className="type__task-priority"
              data-priority="planned"
            >
              <p>Planned</p>
            </div>
            <div
              onClick={this.handleChangePriority}
              className="type__task-priority"
              data-priority="priority"
            >
              <p>Priority</p>
            </div>
          </div>
          <button onClick={this.handleAddTask} className="btn-add">
            Create Task
          </button>
        </div>
        {this.state.popup && <Popup />}
      </>
    );
  }
}

export default AddTask;

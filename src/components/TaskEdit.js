import React from "react";
import "./TaskEdit.css";

class TaskEdit extends React.Component {
  state = {
    value: "",
    valuePop: this.props.editText,
  };

  handleInputPop = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmitPop = (e) => {
    e.preventDefault();
    // const textInput = this.state.value;
    this.props.changeTextInput(this.state.value);
  };
  render() {
    return (
      <>
        <div className="popup__task">
          <div className="popup__task_input">
            <form onSubmit={this.handleSubmitPop}>
              <label>
                {" "}
                <input
                  className="changeText"
                  onChange={this.handleInputPop}
                  type="text"
                  placeholder={this.props.editText}
                  value={this.state.value}
                />
                <button className="btn_save">Save</button>
              </label>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default TaskEdit;

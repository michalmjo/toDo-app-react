import "./Task.css";

const Task = (props) => {
  const style_one = {
    color: "#35DF91",
  };
  const style_two = {
    color: "#F47960",
  };

  const { text, date, trash, doneTask, id, active, important, finishDate } =
    props;

  const imp = function (important) {
    if (important === "planned") {
      return style_one;
    } else if (important === "priority") {
      return style_two;
    } else {
      return null;
    }
  };

  if (active) {
    return (
      <>
        <div className="task">
          <div className="task_area">
            <div className="text_area">
              <button onClick={doneTask.bind(this, id)} className="btn_ico">
                <i className="fas fa-check"></i>
              </button>{" "}
              <div>
                <p>
                  {" "}
                  <strong style={imp(important)}>{text}</strong>
                </p>
                <p>
                  {" "}
                  <span>do {date}</span>{" "}
                </p>
              </div>
            </div>
            <div className="icon_area">
              <button onClick={() => trash(id)} className="btn_ico">
                <i className="fas fa-trash"></i>
              </button>{" "}
              <button
                onClick={(e) => props.changeTask(e, id)}
                className="btn_ico"
              >
                <i className="fas fa-edit"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const time = new Date(finishDate).toLocaleString();
    return (
      <>
        <div className="task">
          <div className="task_area">
            <div className="text_area">
              <div>
                <p>
                  {" "}
                  <strong>{text}</strong>
                </p>
                <p>
                  {" "}
                  <span>do {date}</span>{" "}
                </p>
                <p>Wykonano: {time}</p>
              </div>
            </div>
            <div className="icon_area">
              <button onClick={() => trash(id)} className="btn_ico">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Task;

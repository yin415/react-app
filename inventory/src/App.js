import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./components/Info.js";
import InfoClass from "./components/InfoClass.js";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Tim" number={2} />
      <AddItem text="Vincent" number={3} />
      <AddItem text="Umji" number={4} />
      <InfoClass />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  };

  const updateCountClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Title: {title}</p>
      <p>Counter: {count}</p>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCountClicked}>Update counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 2,
  text: "Eunha",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;

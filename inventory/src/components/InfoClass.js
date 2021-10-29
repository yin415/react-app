import React from "react";
import { PropTypes } from "prop-types";

class InfoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  buttonPressed() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const title = this.props.title;
    const showtitle = true;

    return (
      <div>
        <h1>{showtitle ? title : ""}</h1>
        <p> Manage your staffs.</p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>
          Click me to update counter
        </button>
      </div>
    );
  }
}

InfoClass.defaultProps = {
  title: "Canada",
};

InfoClass.propTypes = {
  title: PropTypes.string,
};

export default InfoClass;

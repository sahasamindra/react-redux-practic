import React, { Component } from "react";

export class Form extends Component {
  state = {
    title: "test",
  };

  handleChange = (ev) => {
    console.log(ev);
    this.setState({
      title: ev.target.value,
    });
  };
  
  render() {
    return (
      <div className="form">
        <form>
          <input
            placeholder="Enter Title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;

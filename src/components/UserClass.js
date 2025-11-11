import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child - constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child - componentDidMount");
  }

  render() {
    const { name, place } = this.props;
    const { count, count2 } = this.state;
    console.log(name + "Child - render");
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{place}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            //Never update state like this:  this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click to Add Count
        </button>
      </div>
    );
  }
}

export default UserClass;

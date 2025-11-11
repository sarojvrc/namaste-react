import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>This is About Us Page</h1>
        <UserClass name={"Saroj KB"} place={"Bengaluru"} />
        <UserClass name={"Saroj Kumar"} place={"Bhubaneswar"} />
        <UserClass name={"Sipan"} place={"Bengaluru"} />
        <UserClass name={"Rajesh"} place={"Bhubaneswar"} />
      </div>
    );
  }
}

export default About;

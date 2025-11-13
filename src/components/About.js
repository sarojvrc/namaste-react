import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1 className="text-center font-extrabold text-2xl">
          This is About Us Page
        </h1>
        <UserClass name={"Saroj KB "} place={"Bengaluru"} />
      </div>
    );
  }
}

export default About;

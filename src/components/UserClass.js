import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Place",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API + "sarojvrc");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;

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
      <div className="flex flex-col items-center border border-solid border-black p-4 m-4 rounded-lg">
        <img className="px-2 h-40 m-2 hover:bg-amber-50" src={avatar_url} />
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="text-xl">{location}</h2>
        <p className="text-sm"> as per the GitHub profile</p>
      </div>
    );
  }
}

export default UserClass;

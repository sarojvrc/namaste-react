import { useState } from "react";
const User = ({ name, place }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{place}</h2>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default User;

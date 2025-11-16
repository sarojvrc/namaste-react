import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl">Contact Us Page</h1>
      <h2 className="text-center text-lg">
        This is Contact us page of Namaste React Project
      </h2>
      <h4 className="font-bold text-center">LoggedIn User: {loggedInUser}</h4>
    </div>
  );
};

export default Contact;

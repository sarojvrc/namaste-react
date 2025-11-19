import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="text-center">
      <h1 className="text-center font-extrabold text-2xl">Contact Us Page</h1>
      <h2 className="text-center text-lg">Fill the form to get touch</h2>
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="border bg-amber-50 rounded-lg m-2 p-2"
            />
          </div>

          <div>
            <input
              type="mobile"
              placeholder="Enter your number"
              className="border bg-amber-50 rounded-lg m-2 p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your city"
              className="border bg-amber-50 rounded-lg m-2 p-2"
            />
          </div>
          <div>
            <button className="p-2 m-2 border bg-amber-50 rounded-xl cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
      <h4 className="font-bold text-center">LoggedIn User: {loggedInUser}</h4>
    </div>
  );
};

export default Contact;

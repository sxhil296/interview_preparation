import React, { useContext} from "react";
import Contact from "./Contact"
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const {phone} = useContext(AppContext)
  return (
    <div>
      <h2 className="font-bold text-3xl">Profile</h2>
      <h2>Phone : {phone}</h2>
      <Contact />
    </div>
  );
};

export default Profile;

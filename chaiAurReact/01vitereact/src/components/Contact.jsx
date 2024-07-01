import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {

  const {phone} = useContext(AppContext)

  return (
    <div>
      <h2 className="font-bold text-3xl">Contact</h2>
      <h3>Phone : {phone}</h3>
    </div>
  );
};

export default Contact;

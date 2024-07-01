import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const {phone, name} = useContext(AppContext);

  return (
    <div>
      <h2 className="font-bold text-3xl">Footer</h2>
      <h3>Phone : {phone}</h3>
      <h3>Name : {name}</h3>
    </div>
  );
};

export default Footer;

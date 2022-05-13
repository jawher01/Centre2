import React from "react";
import Side from "../../side/Navbar";
import { useSelector } from "react-redux";
import Nav from "../../side/SideUser";

const Acceil = () => {
  const user = useSelector((state) => state.userReducer.user);
 
  const isAdmin=(user.role==="admin superieur")

  if (isAdmin) {
    return (
      <div>
        <Side />
        <img src="public/jawher.png"/>
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <img src="http://127.0.0.1:3000/public/jawher.png"/>
      </div>
    );
  }
};

export default Acceil;

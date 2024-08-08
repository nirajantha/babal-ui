import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <>
      <div
        className="side"
        style={{
          width: "50px",
          padding: "10px",
          backgroundColor: "white",
          display: "flex",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <IoIosKeypad color="black" size={50} />
          </span>
          <span>
            <MdContactPhone color="black" size={50} />
          </span>
          <span>
            <FaRocketchat color="black" size={50} />
          </span>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

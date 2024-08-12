import React from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
const ChatUi = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const number = params.get("number");
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        position: "relative",
        backgroundColor: "yellow",
        height: "89%",
      }}
    >
      <div style={{ backgroundColor: "#1182b3", margin: 0 }}>
        <p style={{ margin: 0 }}>To: {number}</p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <textarea
          style={{ borderRadius: "8px" }}
          placeholder="enter the message"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            border: "1px solid green",
          }}
        >
          <IoIosSend color="red" size={30} />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;

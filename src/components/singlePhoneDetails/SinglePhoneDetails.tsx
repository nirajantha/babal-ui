import { Avatar } from "antd";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import {
  usePhoneContext,
  useSideMenuContext,
} from "../../context/PhoneContext";

const SinglePhoneDetails = () => {
  const { setNumber } = usePhoneContext();
  const { setPath } = useSideMenuContext();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const item = JSON.parse(params.get("item") || "");
  console.log("item>>", item);

  const numberCall = (number: string) => {
    console.log("number", number);
  };

  const numberChat = (userItem) => {
    navigate(
      `/chat/${userItem.id}?item=${encodeURIComponent(JSON.stringify(item))}`
    );
    setNumber(userItem.number);
    setPath("chat");
  };
  console.log("phone>>>", item.contactName);

  return (
    <div
      style={{
        height: "89%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        className="avatar"
        style={{
          width: "100%",
          height: "45%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#326071",
          boxSizing: "border-box",
          padding: "10px",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            backgroundColor: "#746b6ba5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </div>
        <p style={{ margin: 0 }}>{item.contactName}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          {" "}
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "4rem",
              backgroundColor: "purple",
            }}
            onClick={() => {
              numberCall(item.number);
            }}
          >
            <IoCall />
            <p style={{ fontSize: "12px", margin: 0, padding: 0 }}>call</p>
          </button>
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "4rem",
              backgroundColor: "purple",
            }}
            onClick={() => {
              numberChat(item);
            }}
          >
            <BsChat />
            <p style={{ fontSize: "12px", margin: 0, padding: 0 }}>chat</p>
          </button>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>{item.number}</p>
      </div>
    </div>
  );
};

export default SinglePhoneDetails;

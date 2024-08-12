import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const PhoneBook = () => {
  const [searchName, setSearchName] = useState<string>("");
  const array = [
    {
      number: "98123456789",
      contactName: "Shah Rukh Khan",
    },
    {
      number: "98123456734",
      contactName: "Kriti sanon",
    },
    {
      number: "98123456776",
      contactName: "Tom Cruis",
    },
    {
      number: "98123456076",
      contactName: "Tyla",
    },
  ];

  const navigate = useNavigate();

  const numberCall = (number: string) => {
    console.log("number", number);
  };
  const numberChat = (number: string) => {
    navigate(`/chat?number=${encodeURIComponent(number)}`);
  };
  return (
    <div style={{ height: "89%", margin: 0 }}>
      <p style={{ margin: 0 }}>Phone Book List</p>
      <div>
        <input
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          type="text"
        />
      </div>
      <div
        style={{
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {array?.map((item, index) => (
          <span
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              border: "1px solid gray",
              boxShadow: "3px 3px 24px 0px rgba(66, 68, 90, 1)",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                width: "4rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {item.contactName}
            </p>
            <Avatar
              onClick={() => {
                navigate("/phoneDetail");
              }}
              icon={<UserOutlined />}
            />{" "}
            <FaRocketchat
              onClick={() => {
                numberChat(item.number);
              }}
              color="purple"
              size={30}
            />
            <IoIosCall
              size={30}
              color="blue"
              onClick={() => {
                numberCall(item.number);
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default PhoneBook;

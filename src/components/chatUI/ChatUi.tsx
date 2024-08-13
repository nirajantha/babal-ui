import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ChatText, ChatWrapper } from "../styled/StyledComponents";

import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

const ChatUi = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const number = params.get("number");
  const [theme, setTheme] = useState<string>("");

  const items: MenuProps["items"] = [
    {
      label: (
        <button
          onClick={() => {
            setTheme("black");
          }}
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={() => {
            setTheme("blue");
          }}
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
      ),
      key: "1",
    },
  ];

  return (
    <ChatWrapper color={theme}>
      <div
        style={{
          backgroundColor: "#1182b3",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0 }}>To: {number}</p>

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: "white" }} size={40} />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          gap: "10px",
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <ChatText placeholder="enter the message" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            border: "2px solid blue",
            right: 0,
          }}
        >
          <IoIosSend color="#480b65" size={30} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatUi;

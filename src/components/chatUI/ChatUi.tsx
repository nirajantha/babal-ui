import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ChatText, ChatWrapper } from "../styled/StyledComponents";

import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Select, Dropdown, Space } from "antd";
import { usePhoneContext } from "../../context/PhoneContext";
import { phoneContact } from "../data/Data";

const ChatUi = () => {
  const { number, setNumber } = usePhoneContext();
  const [contactName, setContactName] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const number = params.get("number");
  const [theme, setTheme] = useState<string>("");
  const { Option } = Select;

  const items: MenuProps["items"] = [
    {
      label: (
        <button
          onClick={() => {
            setTheme("#17a589");
          }}
          style={{ backgroundColor: "#17a589 " }}
        ></button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={() => {
            setTheme("#8e44ad");
          }}
          style={{ backgroundColor: "#8e44ad" }}
        ></button>
      ),
      key: "1",
    },
  ];

  return (
    <ChatWrapper color={theme}>
      <div
        style={{
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          padding: "10px",
          borderBottom: "1px solid white",
        }}
      >
        <Select
          defaultValue={number}
          showSearch
          placeholder="Select a contact number"
          optionFilterProp="children"
          filterOption={(input, option) => {
            const label = option?.label;
            // Ensure label is a string before calling toLowerCase
            return typeof label === "string"
              ? label.toLowerCase().includes(input.toLowerCase())
              : false;
          }}
          style={{ width: 200 }}
        >
          {phoneContact.map((option) => (
            <Option
              key={option.id}
              value={option.number}
              label={option.contactName}
            >
              {option.contactName}
            </Option>
          ))}
        </Select>

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: "white" }} size={50} />
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
        <ChatText width="80%" placeholder="enter the message" />

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

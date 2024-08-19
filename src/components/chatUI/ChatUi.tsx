import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ChatText, ChatWrapper } from "../styled/StyledComponents";

import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Select, Dropdown, Space, message } from "antd";
import { phoneContact } from "../data/Data";

const ChatUi = () => {
  const [message, setMessage] = useState<string>("");
  const [messageNumber, setMessageNumber] = useState();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedUsername, setselectedUsername] = useState<string | null>(null);
  const [showSelect, setShowSelect] = useState<boolean>(true);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const number = params.get("number");
  const [theme, setTheme] = useState<string>("");
  const { Option } = Select;

  const messageArray = JSON.parse(localStorage.getItem("MessageArray") || "[]");

  const filteredMessage = messageArray.filter(
    (item) => item.contactId === selectedItemId
  );
  console.log("filte>>", filteredMessage);
  console.log("id>>", selectedItemId);

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
  //getting details of contact while selecting
  const handleSelectChange = (value, option) => {
    console.log("option>>", option.id);
    setSelectedItemId(option.id);
    setselectedUsername(option.label);
    setMessageNumber(option.value);
  };

  //Message send function

  const send = () => {
    // Get the existing message array from local storage
    let existingMessages = JSON.parse(
      localStorage.getItem("MessageArray") || "[]"
    );

    // Check if there's already an entry for the selected contactId
    let contactMessages = existingMessages.find(
      (item) => item.contactId === selectedItemId
    );

    if (contactMessages) {
      // If the contactId exists, push the new message into the existing array
      contactMessages.message.push(message);
    } else {
      // If the contactId doesn't exist, create a new entry
      existingMessages.push({
        username: selectedUsername,
        contactId: selectedItemId,
        number: messageNumber,
        message: [message],
      });
    }

    // Store the updated array back in local storage
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setMessage("");
    setShowSelect(false);
  };
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
        {showSelect ? (
          <Select
            showSearch
            onChange={(value, option) => handleSelectChange(value, option)}
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
                id={option.id}
                value={option.number}
                label={option.contactName}
              >
                {option.contactName}
              </Option>
            ))}
          </Select>
        ) : (
          <p>{selectedUsername}</p>
        )}

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: "black" }} size={50} />
            </Space>
          </a>
        </Dropdown>
      </div>

      {selectedItemId && filteredMessage !== null ? (
        <div>
          {filteredMessage.map((item, index) => (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
                gap: "2px",
                padding: "8px",
                height: "18rem",
                overflow: "scroll",
                scrollBehavior: "smooth",
              }}
              key={index}
            >
              {item.message.map((messageItem, subIndex) => (
                <p
                  style={{
                    width: "fit-content",
                    border: "1px solid purple",
                    borderRadius: "8px",
                    padding: "8px",
                    margin: 0,
                    backgroundColor: "yellowgreen",
                  }}
                  key={subIndex}
                >
                  {messageItem}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", width: "100%" }}>send a message</p>
      )}

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
        <ChatText
          width="80%"
          placeholder="enter the message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            // border: "2px solid ",
            right: 0,
          }}
        >
          <IoIosSend color="#480b65" onClick={send} size={30} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatUi;

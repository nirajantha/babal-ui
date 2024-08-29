import React, { useMemo, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChatText,
  ChatWrapper,
  MessageBox,
  Span,
} from "../../styled/StyledComponents";

import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Select, Dropdown, Space, Tooltip } from "antd";
import { phoneContact } from "../../data/Data";

const ChatUi = () => {
  const [message, setMessage] = useState<string>("");
  const [messageNumber, setMessageNumber] = useState();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedUsername, setselectedUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  const [theme, setTheme] = useState<string>("");
  const { Option } = Select;

  const currentDate = new Date();

  let messageArray = [];
  try {
    messageArray = JSON.parse(localStorage.getItem("MessageArray") || "[]");
  } catch (error) {
    console.error("Failed to parse userMessage from localStorage:", error);
  }

  const filteredMessage = messageArray.filter(
    (item: { contactId: number | null }) => item.contactId === selectedItemId
  );

  const items: MenuProps["items"] = [
    {
      label: (
        <button
          onClick={() => {
            setTheme("#17a589");
          }}
          className="bg-[#17a589] w-4 h-4"
        ></button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          className="bg-[#8e44ad] h-4 w-4"
          onClick={() => {
            setTheme("#8e44ad");
          }}
        ></button>
      ),
      key: "1",
    },
  ];
  //getting details of contact while selecting
  const handleSelectChange = (value, option) => {
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
      (item: { contactId: number | null }) => item.contactId === selectedItemId
    );

    if (contactMessages) {
      // If the contactId exists, push the new message into the existing array
      contactMessages.message.push({ message: message, date: currentDate });
    } else {
      // If the contactId doesn't exist, create a new entry
      existingMessages.push({
        username: selectedUsername,
        contactId: selectedItemId,
        number: messageNumber,
        message: [
          {
            message: message,
            date: currentDate,
          },
        ],
      });
    }

    // Store the updated array back in local storage
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setMessage("");
    navigate(`/chat/${selectedItemId}`);
  };
  return (
    <ChatWrapper color={theme}>
      <div className="m-0 flex justify-between items-center relative p-[10px] border-solid border-b-2]">
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

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Tooltip placement="top" title="more">
                {" "}
                <MoreOutlined className="text-[black]" size={50} />
              </Tooltip>
            </Space>
          </a>
        </Dropdown>
      </div>

      {selectedItemId && filteredMessage !== null ? (
        <div>
          {filteredMessage.map(
            (
              item: {
                message: (
                  | string
                  | number
                  | boolean
                  | React.ReactPortal
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | null
                  | undefined
                )[];
              },
              index: React.Key | null | undefined
            ) => (
              <div
                className="flex items-end flex-col gap-[2px] p-[8px] h-[18rem] overflow-scroll scroll-smooth "
                key={index}
              >
                {item?.message?.map(
                  (
                    messageItem:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined,
                    subIndex: React.Key | null | undefined
                  ) => (
                    <MessageBox
                      onMouseDown={() => handleMouseDown(messageItem)}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                      width="fit-content"
                      key={subIndex}
                    >
                      {messageItem?.message}
                    </MessageBox>
                  )
                )}
              </div>
            )
          )}
        </div>
      ) : (
        <div className="p-1">
          {" "}
          <Span>send a message</Span>
        </div>
      )}

      <div className="absolute bottom-0 w-full flex gap-[10px] justify-center items-center p-[8px] ">
        <ChatText
          width="80%"
          placeholder="enter the message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className="flex  justify-center items-center w-[2rem] h-[2rem]">
          <IoIosSend color="#480b65" onClick={send} size={30} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatUi;

import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ChatText,
  ChatWrapper,
  MessageBox,
  PressDiv,
  Span,
} from "../styled/StyledComponents";
import { IoIosSend } from "react-icons/io";

const SingleChatUi = () => {
  const [theme, setTheme] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [isLongPress, setIsLongPress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const longPressTimer = useRef<number | null>(null);
  const [pressMsg, setPressMsg] = useState([]);
  const [newMessageId, setNewMessageId] = useState<number | null>(null);

  const handleMouseDown = (msg) => {
    // Start the timer for the long press
    longPressTimer.current = window.setTimeout(() => {
      setIsLongPress(true);
      setIsVisible(true); // Show the div on long press
    }, 500); // Set the long press duration (500ms in this case)
    setPressMsg(msg);
  };

  const handleMouseUp = () => {
    // Clear the timer if the mouse is released before the long press is completed
    clearTimeout(longPressTimer.current!);
  };

  const handleMouseLeave = () => {
    // Clear the timer if the mouse leaves the div before the long press is completed
    clearTimeout(longPressTimer.current!);
  };
  const handleCloseDiv = () => {
    setIsVisible(false);
    setIsLongPress(false);
  };
  // delete chat;
  const deleteMessage = () => {
    // Get the existing message array from local storage
    let existingMessages = JSON.parse(
      localStorage.getItem("MessageArray") || "[]"
    );

    // Find the contact's messages by contactId
    let contactMessages = existingMessages.find(
      (item: { contactId: any }) =>
        item.contactId === userItem.id || item.contactId === userItem.contactId
    );

    if (contactMessages) {
      // Filter out the message you want to delete
      contactMessages.message = contactMessages.message.filter(
        (msg: { message: any }) => msg.message !== pressMsg?.message
      );

      // Update the array in local storage
      localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    }
  };

  //text copy
  const handleCopy = () => {
    navigator.clipboard.writeText(pressMsg?.message);
  };

  //current date
  const currentDate = new Date();
  const userItem = JSON.parse(params.get("item") || "");

  let userMessage = [];
  try {
    userMessage = JSON.parse(localStorage.getItem("MessageArray") || "[]");
  } catch (error) {
    console.error("Failed to parse userMessage from localStorage:", error);
  }
  console.log("userMessage", userMessage);

  const selectedUserMessage = userMessage?.filter(
    (item) => item.contactId === userItem.contactId
  );
  const selectedUserMessagePhoneProfile = userMessage?.filter(
    (item) => item.contactId === userItem.id
  );

  console.log(selectedUserMessage, "slected user message form chat");
  console.log(
    selectedUserMessagePhoneProfile,
    "slected user message form phone book"
  );
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

  //Message send function

  const send = () => {
    // Get the existing message array from local storage
    let existingMessages = JSON.parse(
      localStorage.getItem("MessageArray") || "[]"
    );

    // Check if there's already an entry for the selected contactId
    let contactMessages = existingMessages.find(
      (item) =>
        item.contactId === userItem.id || item.contactId === userItem.contactId
    );

    if (contactMessages) {
      // If the contactId exists, push the new message into the existing array
      contactMessages.message.push({ message: sendMessage, date: currentDate });
      setNewMessageId(contactMessages.message.length - 1);
    } else {
      existingMessages.push({
        username: userItem.contactName,
        contactId: userItem.id,
        number: userItem.number,
        message: [{ message: sendMessage, date: currentDate }],
      });
      setNewMessageId(0); // First message, so ID is 0
    }

    // Store the updated array back in local storage
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setSendMessage("");
  };
  return (
    <ChatWrapper color={theme}>
      {isLongPress && isVisible && (
        <PressDiv onClick={handleCloseDiv}>
          <MessageBox width="fit-content">{pressMsg?.message}</MessageBox>
          <div className="flex gap-4">
            <button
              className="bg-[red] p-2 text-[white]"
              onClick={deleteMessage}
            >
              delete
            </button>

            <button className="bg-[red] p-2 text-[white]" onClick={handleCopy}>
              copy
            </button>
          </div>
        </PressDiv>
      )}
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
        <div>{userItem.id ? userItem?.contactName : userItem?.username}</div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: "black" }} size={50} />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            gap: "8px",
            padding: "8px",
          }}
        >
          {userItem.id ? (
            <>
              {selectedUserMessagePhoneProfile[0]?.message.length > 0 ? (
                <>
                  {selectedUserMessagePhoneProfile[0]?.message?.map(
                    (messageItem1, Index) => (
                      <MessageBox
                        onMouseDown={() => handleMouseDown(messageItem1)}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        width="fit-content"
                        key={Index}
                        isNew={Index === newMessageId}
                      >
                        {messageItem1?.message}
                      </MessageBox>
                    )
                  )}
                </>
              ) : (
                <Span>Send a Message</Span>
              )}
            </>
          ) : (
            <>
              {selectedUserMessage[0]?.message.length > 0 ? (
                <>
                  {selectedUserMessage[0]?.message?.map(
                    (messageItem, indexMsg) => (
                      <MessageBox
                        onMouseDown={() => handleMouseDown(messageItem)}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        width="fit-content"
                        key={indexMsg}
                        isNew={indexMsg === newMessageId}
                      >
                        {messageItem?.message}
                      </MessageBox>
                    )
                  )}
                </>
              ) : (
                <Span>No message</Span>
              )}
            </>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 w-[100%] flex gap-[10px] border-box"
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
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
        />

        <div className="flex justify-center items-center w-[2rem] h-[2rem] rounded-full">
          <IoIosSend color="#480b65" onClick={send} size={30} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default SingleChatUi;

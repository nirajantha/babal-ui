import { MoreOutlined } from "@ant-design/icons";
import { Divider, Dropdown, MenuProps, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ImBin } from "react-icons/im";
import {
  ChatText,
  ChatWrapper,
  MessageBox,
  PressDiv,
  Span,
} from "../../styled/StyledComponents";
import { IoIosSend } from "react-icons/io";
import { error } from "console";

const SingleChatUi = () => {
  const [tags, setTags] = useState<[]>();
  const tagsContainerRef = useRef(null);
  const [theme, setTheme] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsItem = params.get("item");
  const [isLongPress, setIsLongPress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const longPressTimer = useRef<number | null>(null);
  const [pressMsg, setPressMsg] = useState([]);
  const [newMessageId, setNewMessageId] = useState<number | null>(null);

  const currentDate = new Date();
  console.log("currdate>>", currentDate);
  // const userItem = JSON.parse(params.get("item") || "");
  let userItem = {};

  if (paramsItem) {
    try {
      userItem = JSON.parse(paramsItem);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      // Handle the error or assign a default value
    }
  } else {
    console.warn("No 'item' found in URL parameters");
    // Assign a default value if needed
  }

  const handleMouseDown = (msg) => {
    // Start the timer for the long press
    longPressTimer.current = window.setTimeout(() => {
      setIsLongPress(true);
      setIsVisible(true); // Show the div on long press
    }, 500); // Set the long press duration (500ms in this case)
    setPressMsg(msg);
  };

  //auto scroll
  useEffect(() => {
    if (tagsContainerRef.current) {
      tagsContainerRef.current.scrollTop =
        tagsContainerRef.current.scrollHeight;
    }
  }, [tags]);

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

  let userMessage = [];
  try {
    userMessage = JSON.parse(localStorage.getItem("MessageArray") || "[]");
  } catch (error) {
    console.error("Failed to parse userMessage from localStorage:", error);
  }

  const selectedUserMessage = userMessage?.filter(
    (item) => item.contactId === userItem.contactId
  );
  const selectedUserMessagePhoneProfile = userMessage?.filter(
    (item) => item.contactId === userItem.id
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
          className="bg-[#8e44ad] w-4 h-4"
          onClick={() => {
            setTheme("#8e44ad");
          }}
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
      setTags(contactMessages.message.map((msg, index) => `Tag${index + 1}`));
    } else {
      existingMessages.push({
        username: userItem.contactName,
        contactId: userItem.id,
        number: userItem.number,
        message: [{ message: sendMessage, date: currentDate }],
      });
      setNewMessageId(0); // First message, so ID is 0
      setTags([]);
    }

    // Store the updated array back in local storage
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setSendMessage("");
  };
  const date = new Date(pressMsg.date);

  return (
    <ChatWrapper color={theme}>
      {isLongPress && isVisible && (
        <PressDiv onClick={handleCloseDiv}>
          <div className="flex flex-col justify-end items-end">
            <MessageBox width="fit-content">{pressMsg?.message}</MessageBox>
            <span className="text-[13px] text-[white]">
              {new Date(pressMsg?.date).toLocaleString()}
            </span>
          </div>

          <div className="more-feature ">
            <span className="" onClick={handleCopy}>
              Text copy
            </span>
            <Divider className="m-0 p-0 border-[white]" />
            <span
              className=" p-1 text-[white] cursor-pointer"
              onClick={handleCopy}
            >
              Text Translate
            </span>
          </div>

          <button className="bottom-5" onClick={deleteMessage}>
            <ImBin />
          </button>
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

      <div
        ref={tagsContainerRef}
        className="flex flex-col items-end gap-[2px] p-[8px] h-[78%] overflow-scroll scroll-smooth"
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

      <div className="absolute bottom-0 w-[100%]  flex gap-[10px] border-box justify-center items-center p-[8px]">
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

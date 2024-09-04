import { CloseOutlined, MoreOutlined } from "@ant-design/icons";
import { Divider, Drawer, Dropdown, MenuProps, Select, Space } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ImBin } from "react-icons/im";
import {
  ChatText,
  ChatWrapper,
  MessageBox,
  PressDiv,
  Span,
  StyledSelect,
} from "../../styled/StyledComponents";
import { IoIosSend } from "react-icons/io";
import { phoneContact } from "../../data/Data";
import { Language } from "./Language";
const { Option } = Select;

const SingleChatUi = () => {
  const { id } = useParams();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [tags, setTags] = useState<[]>();
  const tagsContainerRef = useRef(null);
  const [theme, setTheme] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const [isLongPress, setIsLongPress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const longPressTimer = useRef<number | null>(null);
  const [pressMsg, setPressMsg] = useState([]);
  const [pressMsgIndex, setPressMsgIndex] = useState<number>();
  const [newMessageId, setNewMessageId] = useState<number | null>(null);

  let phoneContacts = JSON.parse(localStorage.getItem("phoneContacts") || "[]");

  const currentDate = new Date();

  const handleMouseDown = (msg, Index) => {
    // Start the timer for the long press
    longPressTimer.current = window.setTimeout(() => {
      setIsLongPress(true);
      setIsVisible(true); // Show the div on long press
    }, 500); // Set the long press duration (500ms in this case)
    setPressMsg(msg);
    setPressMsgIndex(Index);
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
      (item: { contactId: any }) => item.contactId == Number(id)
    );

    if (contactMessages) {
      // Filter out the message you want to delete
      contactMessages.message = contactMessages.message.filter(
        (msg: any, index: number | undefined) => index !== pressMsgIndex
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

  const selectedUser = useMemo(() => {
    return phoneContacts?.find((item) => item?.id == Number(id));
  }, [id, phoneContacts]);

  const selectedUserMessage = useMemo(() => {
    return userMessage?.find((item) => item?.contactId == Number(id));
  }, [id, userMessage]);

  console.log("selectedUserMessage>>>", selectedUserMessage);

  console.log("selectedUserMessage>>>", selectedUserMessage);

  const items: MenuProps["items"] = useMemo(
    () => [
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
    ],
    []
  );

  //Message send function

  const send = () => {
    if (sendMessage.length > 0) {
      // Get the existing message array from local storage
      let existingMessages = JSON.parse(
        localStorage.getItem("MessageArray") || "[]"
      );

      // Check if there's already an entry for the selected contactId
      let contactMessages = existingMessages.find(
        (item) => item.contactId == Number(id)
      );

      if (contactMessages) {
        // If the contactId exists, push the new message into the existing array
        contactMessages.message.push({
          message: sendMessage,
          date: currentDate,
        });
        setNewMessageId(contactMessages.message.length - 1);
        setTags(contactMessages.message.map((msg, index) => `Tag${index + 1}`));
      } else {
        existingMessages.push({
          username: selectedUser?.contactName,
          contactId: selectedUser?.id,
          number: selectedUser?.number,
          message: [{ message: sendMessage, date: currentDate }],
        });
        setNewMessageId(0); // First message, so ID is 0
        setTags([]);
      }
      console.log("existttt>>>msg", existingMessages);

      // Store the updated array back in local storage
      localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
      setSendMessage("");
    }
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  // language choose
  const handleSelectChange = (value, option) => {};
  return (
    <ChatWrapper color={theme}>
      <Drawer
        closable={false}
        placement="bottom"
        width={350}
        height="80%"
        onClose={onClose}
        open={openDrawer}
        getContainer={false}
      >
        <Space className="flex justify-between p-2">
          <h3 className="text-center font-[600] text-[18px]">Translate</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
        {/* <Space className="w-full bg-red-500 flex justify-center items-center p-2"> */}
        <div className="w-full p-2">
          <StyledSelect
            showSearch
            onChange={(value, option) => handleSelectChange(value, option)}
            placeholder="Select a language"
            optionFilterProp="children"
            filterOption={(input, option) => {
              const label = option?.label;
              // Ensure label is a string before calling toLowerCase
              return typeof label === "string"
                ? label.toLowerCase().includes(input.toLowerCase())
                : false;
            }}
          >
            {Language.map((option) => (
              <Option
                id={option.id}
                value={option.country}
                label={option.language}
              >
                {option.language}
              </Option>
            ))}
          </StyledSelect>
        </div>
        {/* </Space> */}
      </Drawer>
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
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
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
        <div>{selectedUser?.contactName}</div>
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
        className="flex flex-col items-end gap-[2px] p-[8px] h-[60%] overflow-scroll scroll-smooth"
      >
        <>
          {selectedUserMessage?.message.length > 0 ? (
            <>
              {selectedUserMessage?.message?.map((messageItem, indexMsg) => (
                <MessageBox
                  onMouseDown={() => handleMouseDown(messageItem, indexMsg)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  width="fit-content"
                  key={indexMsg}
                  isNew={indexMsg === newMessageId}
                >
                  {messageItem?.message}
                </MessageBox>
              ))}
            </>
          ) : (
            <Span>No message</Span>
          )}
        </>
      </div>

      <div className="absolute bottom-10 w-[100%]   flex gap-[10px] border-box justify-center items-center p-[8px]">
        <ChatText
          width="80%"
          placeholder="enter the message"
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
        />

        <div className="flex justify-center items-center w-[2rem] h-[2rem]  rounded-full">
          <IoIosSend color="#480b65" onClick={send} size={30} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default SingleChatUi;

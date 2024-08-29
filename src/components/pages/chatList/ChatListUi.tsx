import React, { useRef, useState } from "react";
import {
  ChatListWrapper,
  MessageBox,
  PhoneInput,
  PressDiv,
  StyledModal,
} from "../../styled/StyledComponents";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Divider, notification } from "antd";
import { TiPinOutline } from "react-icons/ti";
import { RiWechatPayLine } from "react-icons/ri";
import { ImBin } from "react-icons/im";

const ChatListUi = () => {
  const [searchName, setSearchName] = useState<string>("");
  const chatList = JSON.parse(localStorage.getItem("MessageArray") || "[]");

  const navigate = useNavigate();
  const longPressTimer = useRef<number | null>(null);
  const [chatInfo, setChatInfo] = useState();
  const [index, setIndex] = useState<number>();
  const [isLongPress, setIsLongPress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  let recentChats = chatList.map((user) => {
    const lastMessage = user?.message[user?.message?.length - 1];
    return {
      username: user?.username,
      contactId: user?.contactId,
      message: lastMessage?.message,
      date: new Date(lastMessage?.date),
    };
  });

  const sortedRecentChats = recentChats.sort((a, b) => b.date - a.date);
  console.log("sortedRecentChats", sortedRecentChats);

  const searchedChatList = sortedRecentChats.filter(
    (item: { username: string }) => {
      if (item.username) {
        return item?.username
          ?.toLowerCase()
          .startsWith(searchName?.toLocaleLowerCase());
      } else {
        return null;
      }
    }
  );

  const handleMouseDown = (chat, index) => {
    // Start the timer for the long press
    longPressTimer.current = window.setTimeout(() => {
      setIsLongPress(true);
      setIsVisible(true); // Show the div on long press
    }, 500); // Set the long press duration (500ms in this case)
    setChatInfo(chat);
    setIndex(index);
  };
  console.log("chat>>>", chatInfo);

  const handleMouseUp = (item: { contactId: any }) => {
    // Clear the timer if the mouse is released before the long press is completed
    clearTimeout(longPressTimer.current!);
    // if (!longPressTimer) {
    //   navigate(`/chat/${item.contactId}`);
    // }
  };

  const handleMouseLeave = () => {
    // Clear the timer if the mouse leaves the div before the long press is completed
    clearTimeout(longPressTimer.current!);
  };
  const handleClosePressDiv = () => {
    setIsVisible(false);
    setIsLongPress(false);
  };
  const handleDeleteChat = () => {
    let existingMessages = JSON.parse(
      localStorage.getItem("MessageArray") || "[]"
    );
    existingMessages = existingMessages.filter(
      (item: { contactId: any }) => item.contactId !== chatInfo?.contactId
    );
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setIsDeleteModalOpen(false);
  };

  const handlePinChat = () => {};

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const handleOk = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <ChatListWrapper>
      <StyledModal
        direction="column"
        open={isDeleteModelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        Bodyheight={30}
        bgColor="black"
        footer={[
          <div className=" footer-div">
            <button
              key="cancel"
              className=" cancel-btn "
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              key="delete"
              className=" delete-btn w-[7rem] border-none text-[white] rounded-[10px] bg-[#d45d38] p-2"
              onClick={handleDeleteChat}
            >
              Delete
            </button>
          </div>,
        ]}
      >
        <div className="bin-div">
          <ImBin />
        </div>
        <p className="text-[white] text-center">
          Are You Sure! You Want To Delete This Conversation
        </p>
      </StyledModal>
      {isLongPress && isVisible && (
        <PressDiv onClick={handleClosePressDiv}>
          <h3 className="absolute top-0 left-[35%]  text-white font-[600]">
            {chatInfo?.username}
          </h3>
          <div className="flex flex-col justify-end items-end">
            <MessageBox width="fit-content">{chatInfo?.message}</MessageBox>
            <span className="text-[13px] text-[white]">
              {new Date(chatInfo?.date).toLocaleString()}
            </span>
          </div>
          <div className="more-feature ">
            <span className="" onClick={handlePinChat}>
              Pin <TiPinOutline />
            </span>
            <Divider className="m-0 p-0 border-[white]" />
            <span className="" onClick={handlePinChat}>
              Mark as Read <RiWechatPayLine />
            </span>
            <Divider className="m-0 p-0 border-[white]" />
            <span
              className=" p-1 text-[white] cursor-pointer"
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              Delete <ImBin />
            </span>
          </div>
        </PressDiv>
      )}
      <div className="newChatdiv">
        <BiSolidMessageSquareEdit
          color="purple"
          size={30}
          onClick={() => navigate("/newchat")}
        />
      </div>

      <div className="w-full flex">
        <PhoneInput
          placeholder="Search Chat"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          type="text"
        />
      </div>

      <div className="messageListDiv">
        {searchedChatList?.map((item, index) => (
          <MessageBox
            onMouseDown={() => handleMouseDown(item, index)}
            onMouseUp={() => {
              handleMouseUp(item);
            }}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate(`/chat/${item.contactId}`);
            }}
            width="100%"
            key={index}
          >
            <div>
              {item?.username}

              <p
                style={{
                  color: "#605f5f",
                  margin: 0,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "12rem",
                  overflow: "hidden",
                }}
              >
                {item?.message}
              </p>
            </div>
          </MessageBox>
        ))}
      </div>
    </ChatListWrapper>
  );
};

export default ChatListUi;

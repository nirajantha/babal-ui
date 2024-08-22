import React, { useState } from "react";
import { MessageBox, PhoneInput } from "../styled/StyledComponents";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ChatListUi = () => {
  const [searchName, setSearchName] = useState<string>("");
  const chatList = JSON.parse(localStorage.getItem("MessageArray") || "[]");
  const navigate = useNavigate();

  const recentChats = chatList.map((user) => {
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
  console.log("searchedChatList", searchedChatList);

  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "8px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "10px",
          right: "20px",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          border: "2px solid purple",
          cursor: "pointer",
        }}
      >
        <BiSolidMessageSquareEdit
          color="purple"
          size={30}
          onClick={() => navigate("/newchat")}
        />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <PhoneInput
          placeholder="Search Chat"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          type="text"
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "55vh",
          overflow: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {searchedChatList?.map((item, index) => (
          <MessageBox
            width="100%"
            key={index}
            onClick={() => {
              navigate(
                `/chat/${item.contactId}?item=${encodeURIComponent(
                  JSON.stringify(item)
                )}`
              );
            }}
          >
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
          </MessageBox>
        ))}
      </div>
    </div>
  );
};

export default ChatListUi;

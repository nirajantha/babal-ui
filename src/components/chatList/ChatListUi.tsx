import React, { useState } from "react";
import { PhoneInput } from "../styled/StyledComponents";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ChatListUi = () => {
  const [searchName, setSearchName] = useState<string>("");
  const chatList = JSON.parse(localStorage.getItem("MessageArray") || "[]");
  const navigate = useNavigate();

  const searchedChatList = chatList.filter((item: { username: string }) => {
    if (item.username) {
      return item?.username
        ?.toLowerCase()
        .startsWith(searchName?.toLocaleLowerCase());
    } else {
      return null;
    }
  });

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
        }}
      >
        <BiSolidMessageSquareEdit
          color="purple"
          size={30}
          onClick={() => navigate("/chat")}
        />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <PhoneInput
          placeholder="search Chat"
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
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: "1px solid purple",
              borderRadius: "8px",
              padding: "6px",
              margin: 0,
              backgroundColor: "yellowgreen",
            }}
            onClick={() => {
              navigate(
                `/chat/${item.contactId}?item=${encodeURIComponent(
                  JSON.stringify(item)
                )}`
              );
            }}
          >
            {item.username}

            <p
              style={{
                color: "gray",
                margin: 0,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "12rem",
                overflow: "hidden",
              }}
            >
              {item.message.reverse()[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatListUi;

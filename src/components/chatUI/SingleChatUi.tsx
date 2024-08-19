import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChatText, ChatWrapper } from "../styled/StyledComponents";
import { IoIosSend } from "react-icons/io";

const SingleChatUi = () => {
  const [theme, setTheme] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const userItem = JSON.parse(params.get("item") || "");

  const userMessage = JSON.parse(localStorage.getItem("MessageArray") || "");

  const selectedUserMessage = userMessage.filter(
    (item) => item.contactId === userItem.contactId
  );
  const selectedUserMessagePhoneProfile = userMessage.filter(
    (item) => item.contactId === userItem.id
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
      contactMessages.message.push(sendMessage);
    } else {
      existingMessages.push({
        username: userItem.contactName,
        contactId: userItem.id,
        number: userItem.number,
        message: [sendMessage],
      });
    }

    // Store the updated array back in local storage
    localStorage.setItem("MessageArray", JSON.stringify(existingMessages));
    setSendMessage("");
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
            gap: "2px",
            padding: "8px",
          }}
        >
          {userItem.id ? (
            <>
              {selectedUserMessagePhoneProfile[0]?.message.length > 0 ? (
                <>
                  {selectedUserMessagePhoneProfile[0]?.message?.map(
                    (messageItem, subIndex) => (
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
                    )
                  )}
                </>
              ) : (
                <>Send a Message</>
              )}
            </>
          ) : (
            <>
              {selectedUserMessage[0]?.message?.map((messageItem, subIndex) => (
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
            </>
          )}
        </div>
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
        <ChatText
          width="80%"
          placeholder="enter the message"
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
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

export default SingleChatUi;

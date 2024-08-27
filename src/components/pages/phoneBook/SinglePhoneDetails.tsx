import { Avatar } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import {
  usePhoneContext,
  useSideMenuContext,
} from "../../../context/PhoneContext";

const SinglePhoneDetails = () => {
  const { setNumber } = usePhoneContext();
  const { setPath } = useSideMenuContext();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const item = JSON.parse(params.get("item") || "");

  const numberCall = (userItem: { id: number }) => {
    navigate(`/call/?item=${encodeURIComponent(JSON.stringify(item))}`);
  };

  const numberChat = (userItem: {
    id: number;
    number: React.SetStateAction<string>;
  }) => {
    navigate(
      `/chat/${userItem.id}?item=${encodeURIComponent(JSON.stringify(item))}`
    );
    setNumber(userItem.number);
    setPath("chat");
  };

  return (
    <div className="h-[89%] text-[#fff] flex flex-col items-center gap-[10px]">
      <div className="avatar w-[100%] h-[45%] relative flex flex-col items-center bg-[#326071] p-[10px] gap-[10px]">
        <div className="w-[6rem] h-[6rem] rounded-full bg-[#746b6ba5] flex justify-center items-center">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </div>
        <p style={{ margin: 0 }}>{item.contactName}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          {" "}
          <button
            className="flex flex-col justify-center items-center w-[4rem] bg-[purple] p-1"
            onClick={() => {
              numberCall(item);
            }}
          >
            <IoCall />
            <p className="text-[12px] m-0 p-0">call</p>
          </button>
          <button
            className="flex flex-col justify-center items-center w-[4rem] bg-[purple] p-1"
            onClick={() => {
              numberChat(item);
            }}
          >
            <BsChat />
            <p className="text-[12px] m-0 p-0">chat</p>
          </button>
        </div>
      </div>

      <div className="mt-[2rem]">
        <p>{item.number}</p>
      </div>
    </div>
  );
};

export default SinglePhoneDetails;

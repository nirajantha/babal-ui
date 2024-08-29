import { Avatar } from "antd";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams();

  const numberCall = () => {
    navigate(`/call/${Number(id)}`);
  };

  let messageArray = [];
  try {
    const storedMessages = localStorage.getItem("MessageArray");
    if (storedMessages) {
      messageArray = JSON.parse(storedMessages);
    }
  } catch (error) {
    console.error("Failed to parse userMessage from localStorage:", error);
  }

  const FilteredArray = messageArray.find(
    (item) => item.contactId === Number(id)
  );
  console.log("filterArray>>>", FilteredArray);

  console.log("phone");

  const numberChat = () => {
    navigate(`/chat/${Number(id)}`);
    setNumber(FilteredArray?.number);
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
        <p style={{ margin: 0 }}>{FilteredArray?.username}</p>
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
            onClick={numberCall}
          >
            <IoCall />
            <p className="text-[12px] m-0 p-0">call</p>
          </button>
          <button
            className="flex flex-col justify-center items-center w-[4rem] bg-[purple] p-1"
            onClick={numberChat}
          >
            <BsChat />
            <p className="text-[12px] m-0 p-0">chat</p>
          </button>
        </div>
      </div>

      <div className="mt-[2rem]">
        <p>{FilteredArray?.number}</p>
      </div>
    </div>
  );
};

export default SinglePhoneDetails;

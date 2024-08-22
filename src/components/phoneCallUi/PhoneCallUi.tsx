import React from "react";
import { ImUser } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";
import { IoIosCall, IoMdKeypad } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineNoteAdd } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
import { TiTags } from "react-icons/ti";
import { Divider } from "antd";
import { StyledNumber } from "../styled/StyledComponents";

const PhoneCallUi = () => {
  const handleCancel = () => {
    console.log("cancel");
  };
  return (
    <div className="w-full h-[93%] flex flex-col items-center p-2 gap-4">
      <div className="w-full h-[12rem] flex flex-col gap-3 justify-center items-center">
        <div className="bg-[#676666a2] h-[3rem] w-[3rem] flex justify-center items-end rounded-[15px] overflow-hidden">
          {" "}
          <ImUser size={40} />
        </div>
        <div className="">
          {" "}
          <h2 className="text-[20px] font-bold text-center">Nirajan</h2>
          <p className="text-center text-[13px]">Calling...</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 w-[15rem] ">
        <div className="flex flex-col items-center">
          <div className="w-[3rem] h-[3rem] bg-transparent flex flex-col justify-center items-center rounded-[8px] hover:bg-[#9b98986a]">
            <BsFillRecordCircleFill color="red" />
          </div>
          <p className="text-[13px]">Record</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] hover:bg-[#9b98986a]">
            <FaPause />
          </div>
          <p className="text-[13px]">Hold</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] hover:bg-[#9b98986a]">
            <BsFillMicMuteFill />
          </div>
          <p className="text-[13px]">Mute</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] hover:bg-[#9b98986a]">
            <IoMdKeypad />
          </div>
          <p className="text-[13px]">Keypad</p>
        </div>
      </div>

      <div className="w-[15rem]">
        <Divider style={{ margin: 0 }} />
      </div>

      <div className="flex justify-between items-center w-[15rem] ">
        <div
          style={{ boxShadow: "0px 0px 52px 30px rgba(0,0,0,0.1)" }}
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center rounded-[8px] bg-[white]"
        >
          <MdOutlineNoteAdd size={25} />
          <p className="m-0 font-[500]">Notes</p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 52px 30px rgba(0,0,0,0.1)" }}
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center rounded-[8px] bg-[white] "
        >
          <TiTags size={25} />
          <p className="m-0 font-[500] ">Tags</p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 52px 30px rgba(0,0,0,0.1)" }}
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center rounded-[8px] bg-[white]"
        >
          <TbUserSquareRounded size={25} />
          <p className="m-0 font-[500]">Add</p>
        </div>
      </div>

      <div className="w-[15rem]">
        <Divider style={{ margin: 0 }} />
      </div>

      <div className="flex justify-between items-center w-[15rem] ">
        <div className="flex w-[4rem] flex-col justify-center items-center">
          {" "}
          <BsChatSquareTextFill size={20} />
          <p className="m-0 text-[12px]">Conversation</p>
        </div>

        <StyledNumber rounded={true} onClick={handleCancel} digitColor="red">
          <IoIosCall size={20} color="white" />
        </StyledNumber>

        <div className="flex w-[4rem] flex-col justify-center items-center">
          <BiSolidPhoneCall size={20} />
          <p className="m-0 text-[12px]">Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCallUi;

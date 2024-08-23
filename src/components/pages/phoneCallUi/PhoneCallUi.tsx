import React, { useState } from "react";
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
import { Button, Divider, Drawer, Select, Space } from "antd";
import {
  CallWrapper,
  ChatText,
  Display,
  StyledModal,
  StyledNumber,
} from "../../styled/StyledComponents";
import { useLocation } from "react-router-dom";
import Numbers from "../../keypad/Numbers";
import { useNumberContext } from "../../context/CreateContext";

const options = [
  {
    label: "Bank",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)",
  },
];

const PhoneCallUi = () => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [muteMike, setMuteMike] = useState(false);
  const [holdCall, setHoldCall] = useState(false);
  const params = new URLSearchParams(location.search);
  const item = params.get("item");
  let userCallInfo = {};

  if (item) {
    try {
      userCallInfo = JSON.parse(item);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      // Handle the error or assign a default value
    }
  } else {
    console.warn("No 'item' found in URL parameters");
    // Assign a default value if needed
  }
  console.log("userinfo>>>", userCallInfo?.contactName);
  const { state, dispatch } = useNumberContext();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const showTagDrawer = () => {
    setTagOpen(true);
  };
  const [open, setOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    setTagOpen(false);
  };
  const mute = () => {
    setMuteMike(!muteMike);
  };
  const hold = () => {
    setHoldCall(!holdCall);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  console.log("modal open>>", isModalOpen);

  return (
    <CallWrapper>
      <StyledModal
        title="Notes"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <ChatText width={100} placeholder="Write notes" />
        <Button
          className="bg-[green] text-[white]"
          size="middle"
          onClick={handleOk}
        >
          Save
        </Button>
      </StyledModal>

      <Drawer
        title="Tags"
        placement="top"
        width={350}
        height="60%"
        onClose={onClose}
        open={tagOpen}
        getContainer={false}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select one country"
          defaultValue={["china"]}
          onChange={handleChange}
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Drawer>

      <Drawer
        title="Keypad"
        placement="bottom"
        width={350}
        height="95%"
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Display>{state?.number}</Display>
        <Numbers />
      </Drawer>
      <div className="w-full h-[12rem] flex flex-col gap-3 justify-center items-center">
        <div className="bg-[#676666a2] h-[3rem] w-[3rem] flex justify-center items-end rounded-[15px] overflow-hidden">
          {" "}
          <ImUser size={40} />
        </div>
        <div className="">
          {" "}
          <h2 className="text-[20px] font-bold text-center">
            {userCallInfo.contactName != undefined
              ? userCallInfo?.contactName
              : "Nirajan"}
          </h2>
          <p className="text-center text-[13px]">Calling...</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 w-[15rem] ">
        <div className="flex flex-col items-center">
          <div className="w-[3rem] h-[3rem] bg-transparent flex flex-col justify-center items-center rounded-[8px] cursor-pointer hover:bg-[#9b98986a]">
            <BsFillRecordCircleFill color="red" />
          </div>
          <p className="text-[13px]">Record</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] cursor-pointer hover:bg-[#9b98986a]"
            onClick={hold}
          >
            <FaPause color={holdCall ? "green" : ""} />
          </div>
          <p className="text-[13px]">{holdCall ? `Resume` : `Hold`}</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] cursor-pointer hover:bg-[#9b98986a]"
            onClick={mute}
          >
            <BsFillMicMuteFill color={muteMike ? "red" : ""} />
          </div>
          <p className="text-[13px]">Mute</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-[3rem] h-[3rem] flex flex-col justify-center items-center rounded-[8px] cursor-pointer hover:bg-[#9b98986a]"
            onClick={showDrawer}
          >
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
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center cursor-pointer rounded-[8px] bg-[white]"
          onClick={showModal}
        >
          <MdOutlineNoteAdd size={25} />
          <p className="m-0 font-[500]">Notes</p>
        </div>
        <div
          onClick={showTagDrawer}
          style={{ boxShadow: "0px 0px 52px 30px rgba(0,0,0,0.1)" }}
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center cursor-pointer rounded-[8px] bg-[white] "
        >
          <TiTags size={25} />
          <p className="m-0 font-[500] ">Tags</p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 52px 30px rgba(0,0,0,0.1)" }}
          className="w-[4rem] h-[4rem] flex flex-col justify-center items-center cursor-pointer rounded-[8px] bg-[white]"
        >
          <TbUserSquareRounded size={25} />
          <p className="m-0 font-[500]">Add</p>
        </div>
      </div>

      <div className="w-[15rem]">
        <Divider style={{ margin: 0 }} />
      </div>

      <div className="flex justify-between items-center w-[15rem] ">
        <div className="flex w-[4rem] flex-col justify-center items-center cursor-pointer">
          <BsChatSquareTextFill size={20} />
          <p className="m-0 text-[12px]">Conversation</p>
        </div>

        <StyledNumber rounded={true} onClick={handleCancel} digitColor="red">
          <IoIosCall size={20} color="white" />
        </StyledNumber>

        <div className="flex w-[4rem] flex-col justify-center items-center cursor-pointer">
          <BiSolidPhoneCall size={20} />
          <p className="m-0 text-[12px]">Transfer</p>
        </div>
      </div>
    </CallWrapper>
  );
};

export default PhoneCallUi;

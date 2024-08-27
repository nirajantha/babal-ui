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
const { Option } = Select;
import {
  CallFeatureDiv,
  CallHead,
  CallWrapper,
  ChatText,
  Display,
  StyledModal,
  StyledNumber,
} from "../../styled/StyledComponents";
import { useLocation } from "react-router-dom";
import Numbers from "../../keypad/Numbers";
import { useNumberContext } from "../../context/CreateContext";
import ChatUi from "../chatUI/ChatUi";
import SingleChatUi from "../chatUI/SingleChatUi";
import { phoneContact } from "../../data/Data";
import { CloseOutlined } from "@ant-design/icons";

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
  const [open, setOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [convoOpen, setConvoOpen] = useState(false);
  const [transferCallOpen, setTransferCallOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number>();
  const [selectedUsername, setselectedUsername] = useState<string>("");
  const [Number, setNumber] = useState<number>();
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

  const { state } = useNumberContext();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const showTagDrawer = () => {
    setTagOpen(true);
  };
  const showConvoDrawer = () => {
    setConvoOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setTagOpen(false);
    setConvoOpen(false);
    setTransferCallOpen(false);
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
  const transferCall = () => {
    setTransferCallOpen(true);
  };

  const handleSelectChange = (value, option) => {
    setSelectedItemId(option.id);
    setselectedUsername(option.label);
    setNumber(option.value);
  };

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
        placement="top"
        width={350}
        closable={false}
        height="60%"
        onClose={onClose}
        open={tagOpen}
        getContainer={false}
      >
        <Space className="flex justify-between p-2">
          <h3 className="text-left font-[600] text-[18px]">Tags</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
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
        closable={false}
        placement="bottom"
        width={350}
        height="95%"
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Space className="flex justify-between p-2">
          <h3 className="text-left font-[600] text-[18px]">Keypad</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
        <Display>{state?.number}</Display>
        <Numbers />
      </Drawer>

      <Drawer
        placement="bottom"
        width={350}
        height="100%"
        onClose={onClose}
        open={convoOpen}
        getContainer={false}
        closable={false}
      >
        <Space className="flex justify-between p-2">
          <h3 className="text-left font-[600] text-[18px]">Chat</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
        <SingleChatUi />
      </Drawer>

      <Drawer
        placement="top"
        width={350}
        height="60%"
        closable={false}
        onClose={onClose}
        open={transferCallOpen}
        getContainer={false}
      >
        <Space className="flex justify-between p-2">
          <h3 className="text-left font-[600] text-[18px]">Transfer Call</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
        <Select
          className="w-[100%]"
          showSearch
          onChange={(value, option) => handleSelectChange(value, option)}
          placeholder="Select a contact number"
          optionFilterProp="children"
          filterOption={(input, option) => {
            const label = option?.label;
            // Ensure label is a string before calling toLowerCase
            return typeof label === "string"
              ? label.toLowerCase().includes(input.toLowerCase())
              : false;
          }}
        >
          {phoneContact.map((option) => (
            <Option
              key={option?.id}
              id={option?.id}
              value={option?.number}
              label={option?.contactName}
            >
              {option?.contactName}
            </Option>
          ))}
        </Select>
      </Drawer>

      <CallHead>
        <div className="call-user-img">
          {" "}
          <ImUser size={40} />
        </div>
        <div className="call-head-content">
          {" "}
          <h2 className="text-[20px] font-bold text-center">
            {userCallInfo?.contactName != undefined
              ? userCallInfo?.contactName
              : "Nirajan"}
          </h2>
          <p className="text-center text-[13px]">Calling...</p>
        </div>
      </CallHead>

      <CallFeatureDiv>
        <div className="featureDiv">
          <div className="feature-icon-div">
            <BsFillRecordCircleFill color="red" />
          </div>
          <p className="text-[13px]">Record</p>
        </div>

        <div className="featureDiv">
          <div className="feature-icon-div" onClick={hold}>
            <FaPause color={holdCall ? "green" : ""} />
          </div>
          <p className="text-[13px]">{holdCall ? `Resume` : `Hold`}</p>
        </div>

        <div className="featureDiv">
          <div className="feature-icon-div" onClick={mute}>
            <BsFillMicMuteFill color={muteMike ? "red" : ""} />
          </div>
          <p className="text-[13px]">Mute</p>
        </div>
        <div className="featureDiv">
          <div className="feature-icon-div" onClick={showDrawer}>
            <IoMdKeypad />
          </div>
          <p className="text-[13px]">Keypad</p>
        </div>
      </CallFeatureDiv>

      <div className="w-[15rem]">
        <Divider style={{ margin: 0 }} />
      </div>

      <CallFeatureDiv>
        <div className="nta-feature" onClick={showModal}>
          <MdOutlineNoteAdd size={25} />
          <p className="m-0 font-[500]">Notes</p>
        </div>
        <div onClick={showTagDrawer} className="nta-feature ">
          <TiTags size={25} />
          <p className="m-0 font-[500] ">Tags</p>
        </div>
        <div className="nta-feature">
          <TbUserSquareRounded size={25} />
          <p className="m-0 font-[500]">Add</p>
        </div>
      </CallFeatureDiv>

      <div className="w-[15rem]">
        <Divider style={{ margin: 0 }} />
      </div>

      <CallFeatureDiv>
        <div className=" feature-footer " onClick={showConvoDrawer}>
          <BsChatSquareTextFill size={20} />
          <p className="m-0 text-[12px]">Conversation</p>
        </div>

        <StyledNumber rounded={true} onClick={handleCancel} digitColor="red">
          <IoIosCall size={20} color="white" />
        </StyledNumber>

        <div className=" feature-footer " onClick={transferCall}>
          <BiSolidPhoneCall size={20} />
          <p className="m-0 text-[12px]">Transfer</p>
        </div>
      </CallFeatureDiv>
    </CallWrapper>
  );
};

export default PhoneCallUi;

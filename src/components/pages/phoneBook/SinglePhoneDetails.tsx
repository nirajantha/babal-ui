import { Avatar, Divider } from "antd";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import {
  usePhoneContext,
  useSideMenuContext,
} from "../../../context/PhoneContext";
import {
  ChatListWrapper,
  ContactShowDiv,
  StyledButton,
  StyledModal,
} from "../../styled/StyledComponents";
import { ImBin } from "react-icons/im";

const SinglePhoneDetails = () => {
  const { setNumber } = usePhoneContext();
  const { setPath } = useSideMenuContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDeleteModelOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const numberCall = () => {
    navigate(`/call/${Number(id)}`);
  };

  let phoneContacts = JSON.parse(localStorage.getItem("phoneContacts") || "[]");

  let messageArray = [];
  try {
    const storedMessages = localStorage.getItem("MessageArray");
    if (storedMessages) {
      messageArray = JSON.parse(storedMessages);
    }
  } catch (error) {
    console.error("Failed to parse userMessage from localStorage:", error);
  }

  const FilteredArray = useMemo(() => {
    return phoneContacts.find((item) => item.id == Number(id));
  }, [id, phoneContacts]);

  console.log("filter array>>>", FilteredArray);

  const numberChat = () => {
    navigate(`/chat/${Number(id)}`);
    setNumber(FilteredArray?.number);
    setPath("chat");
  };

  const handleOk = () => {
    setIsDeleteModalOpen(true);
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const deleteContact = () => {
    let existingContacts = JSON.parse(
      localStorage.getItem("phoneContacts") || "[]"
    );
    existingContacts = existingContacts.filter(
      (item: { id: number }) => item.id != Number(id)
    );

    localStorage.setItem("phoneContacts", JSON.stringify(existingContacts));
  };
  const editContact = () => {};

  return (
    <div
      className="h-[95%] w-[full] text-[#fff] flex flex-col items-center relative overflow-hidden"
      id="custom-modal-container"
    >
      <StyledModal
        top="71px"
        left="157px"
        direction="column"
        open={isDeleteModelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        Bodyheight={30}
        bgColor="black"
        getContainer={() => document.getElementById("custom-modal-container")!}
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
              onClick={deleteContact}
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
      <div className="avatar w-[100%]  relative flex flex-col items-center bg-[#326071] p-[10px] gap-[10px]">
        <div className="w-[6rem] h-[6rem] rounded-full bg-[#746b6ba5] flex justify-center items-center">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </div>
        <p style={{ margin: 0 }}>{FilteredArray?.contactName}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "18px",
          }}
        >
          {" "}
          <StyledButton
            className="flex flex-col justify-center items-center w-[3rem] bg-[purple] p-1"
            onClick={numberCall}
          >
            <IoCall />
            <p className="text-[12px] m-0 p-0">Call</p>
          </StyledButton>
          <StyledButton
            className="flex flex-col justify-center items-center w-[3rem] bg-[purple] p-1"
            onClick={numberChat}
          >
            <BsChat />
            <p className="text-[12px] m-0 p-0">Chat</p>
          </StyledButton>
          <StyledButton
            className="flex flex-col justify-center items-center w-[3rem] bg-[purple] p-1"
            onClick={handleOk}
          >
            <ImBin />
            <p className="text-[12px] m-0 p-0">Delete</p>
          </StyledButton>
          <StyledButton
            className="flex flex-col justify-center items-center w-[3rem] bg-[purple] p-1"
            onClick={editContact}
          >
            <FaUserEdit />
            <p className="text-[12px] m-0 p-0">Edit</p>
          </StyledButton>
        </div>
      </div>

      <div className="bg-[#000] flex flex-col h-[40vh] gap-2 w-full p-[8px]">
        <ContactShowDiv>
          <p className="m-0">Phone</p>
          <p className="m-0">{FilteredArray?.number}</p>
        </ContactShowDiv>

        <ContactShowDiv>
          <span className="cursor-pointer" onClick={numberChat}>
            Send Message
          </span>
          <Divider className="m-0 p-0 border-[white]" />
          <span className="cursor-pointer">Add To Favourite</span>
        </ContactShowDiv>
      </div>
    </div>
  );
};

export default SinglePhoneDetails;

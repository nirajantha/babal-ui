import React, { useEffect, useState } from "react";
import {
  Display,
  PhoneInput,
  StyledForm,
  StyledLabel,
} from "../styled/StyledComponents";

import BabalFooter from "../footer/DialerFooter";
import { useNumberContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
import Numbers from "./Numbers";
import { Button, Drawer, Modal, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
interface keypadprops {
  digitColor?: string;
}

const error = (message: string) => {
  Modal.error({
    width: 250,
    content: message,
    style: { top: 300, left: 34, width: "10rem" },
    bodyStyle: { display: "flex", height: 20 },
    closable: false,
    footer: (
      <Button
        type="primary"
        onClick={() => Modal.destroyAll()} // Close the modal on click
        style={{
          backgroundColor: "red",
          borderColor: "red",
          position: "absolute",
          bottom: "10px",
          right: "10px",
        }} // Custom styles for your button
      >
        OK
      </Button>
    ),
  });
};

const Keypad = ({ digitColor }: keypadprops) => {
  const [id, setId] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };

  const { state, dispatch } = useNumberContext();
  const navigate = useNavigate();
  const handleCall = () => {
    if (state.number.length === 10) {
      navigate("/call");
    } else {
      error("Invalid number");
    }
  };

  useEffect(() => {
    if (state.number) {
      setContactNumber(state.number);
    }
  }, [state.number]);

  console.log("contact Number", contactNumber);

  const addContacts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact = {
      id: id,
      contactName: contactName,
      number: state.number ? state.number : contactNumber,
    };
    let existingContacts = JSON.parse(
      localStorage.getItem("phoneContacts") || "[]"
    );

    const contactExists = existingContacts.some(
      (item) => item.id == id || item.number == contactNumber
    );
    if (contactExists) {
      error("number already exist");
      setOpen(true);
      return;
    }

    existingContacts.push(newContact);
    localStorage.setItem("phoneContacts", JSON.stringify(existingContacts));
    setId("");
    setContactName("");
    setContactNumber("");
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      <Drawer
        closable={false}
        placement="bottom"
        width={350}
        height="80%"
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Space className="flex justify-between p-2 relative">
          <h3 className="text-left font-[600] text-[18px]"> Add Contact</h3>
          <CloseOutlined onClick={onClose} />
        </Space>
        <div>
          <StyledForm
            onSubmit={(e) => {
              addContacts(e);
            }}
          >
            <h2 className="text-center text-[18px] font-[600]">
              Contact Details
            </h2>
            <StyledLabel htmlFor="id">
              Id
              <PhoneInput
                value={id}
                id="id"
                type="number"
                placeholder="Enter id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="name">
              Contact Name
              <PhoneInput
                value={contactName}
                id="name"
                placeholder=" Enter contact name"
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="number">
              Contact Number
              <PhoneInput
                value={contactNumber}
                id="number"
                placeholder="Enter Contact number"
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </StyledLabel>
            <button type="submit" className="p-2 bg-[#6a4984] text-[#fff]">
              Add
            </button>
          </StyledForm>
        </div>
      </Drawer>
      <Display>{state.number}</Display>
      <Numbers digitColor={digitColor} />
      <BabalFooter
        handleCall={handleCall}
        handleAddCotact={() => setOpen(true)}
      />
    </div>
  );
};

export default Keypad;

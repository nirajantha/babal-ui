import React, { useState } from "react";
import { HeaderDiv } from "../styled/StyledComponents";
import { Checkbox, Select, Space } from "antd";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const DialerHeader = () => {
  const [changeValue, setChangeValue] = useState<string>("9812345678");
  const [click, setClick] = useState<boolean>(false);
  const handleChange = (value: React.SetStateAction<string>) => {
    setChangeValue(value ?? "");
  };
  const options = [
    { value: "9812345678", label: "9812345678" },
    { value: "9823456781", label: "9823456781" },
    { value: "9845678123", label: "9845678123" },
  ];
  return (
    <>
      <HeaderDiv>
        {/* <Select
          suffixIcon={false}
          className="w-[10rem]"
          variant="borderless"
          size="middle"
          options={CountryCode}
          optionRender={(option) => (
            <Space className="flex justify-between items-center">
              <span className="text-[red] ">
                {option.data.emoji}
                {option.data.name.substring(0, 3)}
                {option?.data?.dial_code}
              </span>
            </Space>
          )}
        /> */}
        <Select
          defaultValue="9812345678"
          onClick={() => setClick(!click)}
          onChange={(value) => handleChange(value)}
          suffixIcon={
            click ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />
          }
          variant="borderless"
          size="large"
          className="w-full border-none"
          placeholder="Select a Number"
          options={options}
          optionRender={(option) => (
            <Space className="flex justify-between items-center">
              <span className="text-[red] ">{option?.label}</span>
              <Checkbox checked={option?.value === changeValue} />
            </Space>
          )}
        />
      </HeaderDiv>
    </>
  );
};

export default DialerHeader;

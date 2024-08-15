import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ContactWrapper, PhoneInput } from "../styled/StyledComponents";
import {
  usePhoneContext,
  useSideMenuContext,
} from "../../context/PhoneContext";
import { phoneContact } from "../data/Data";

const PhoneBook = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { setNumber } = usePhoneContext();
  const { setPath } = useSideMenuContext();

  const navigate = useNavigate();

  const numberCall = (number: string) => {
    console.log("number", number);
  };
  const numberChat = (number: string) => {
    navigate(`/chat`);
    setNumber(number);
    setPath("chat");
  };
  console.log("searchname>>.", searchName);

  const ascendingArray = phoneContact.sort((a, b) =>
    a.contactName.localeCompare(b.contactName)
  );
  console.log("ascending>>>", ascendingArray);

  const searchedContacts = phoneContact.filter((item) => {
    if (item.contactName) {
      return item?.contactName
        ?.toLowerCase()
        .startsWith(searchName?.toLocaleLowerCase());
    } else {
      return null;
    }
  });

  return (
    <ContactWrapper>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          // backgroundColor: "orange",
        }}
      >
        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Phone Book List
        </p>
        <PhoneInput
          placeholder="search contact list"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          type="text"
        />
      </div>

      <div
        style={{
          height: "70%",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflow: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {searchedContacts.length > 0 ? (
          searchedContacts?.map((item, index) => (
            <span
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                border: "1px solid gray",
                boxShadow: "0px 0px 8px 2px rgba(159, 159, 174, 1);",
                borderRadius: "8px",
                backgroundColor: "#d5d3d39d",
              }}
            >
              <p
                onClick={() => {
                  navigate(
                    `/phoneDetail/${item.id}?item=${encodeURIComponent(
                      JSON.stringify(item)
                    )}`
                  );
                }}
                style={{
                  margin: 0,
                  padding: 0,
                  width: "4rem",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {item.contactName}
              </p>

              <FaRocketchat
                onClick={() => {
                  numberChat(item.number);
                }}
                color="purple"
                size={30}
              />
              <IoIosCall
                size={30}
                color="blue"
                onClick={() => {
                  numberCall(item.number);
                }}
              />
            </span>
          ))
        ) : (
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {" "}
            Contact Number Not Found
          </p>
        )}
      </div>
    </ContactWrapper>
  );
};

export default PhoneBook;

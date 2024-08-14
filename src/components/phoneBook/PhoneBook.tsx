import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ContactWrapper, PhoneInput } from "../styled/StyledComponents";
import { usePhoneContext } from "../../context/PhoneContext";

const PhoneBook = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { number, setNumber } = usePhoneContext();
  const array = [
    {
      id: 1,
      number: "98123456789",
      contactName: "Shah Rukh Khan",
    },
    {
      id: 2,
      number: "98123456782",
      contactName: "Sallmon Bhai",
    },
    {
      id: 3,
      number: "98123456781",
      contactName: "Srivallli",
    },
    {
      id: 4,
      number: "98123456734",
      contactName: "Kriti sanon",
    },
    {
      id: 5,
      number: "98123456732",
      contactName: "Kritika sanon",
    },
    {
      id: 6,
      number: "98123456776",
      contactName: "Tom Cruis",
    },
    {
      id: 7,
      number: "98123456076",
      contactName: "Tyla",
    },
  ];

  const navigate = useNavigate();

  const numberCall = (number: string) => {
    console.log("number", number);
  };
  const numberChat = (number: string) => {
    navigate(`/chat`);
    setNumber(number);
  };
  console.log("searchname>>.", searchName);

  const ascendingArray = array.sort((a, b) =>
    a.contactName.localeCompare(b.contactName)
  );
  console.log("ascending>>>", ascendingArray);

  const searchedContacts = array.filter((item) => {
    if (item.contactName) {
      return item?.contactName
        ?.toLowerCase()
        .startsWith(searchName?.toLocaleLowerCase());
    } else {
      return <p>No contact Details</p>;
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
          backgroundColor: "orange",
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
                boxShadow: "3px 3px 24px 0px rgba(66, 68, 90, 1)",
                borderRadius: "8px",
                backgroundColor: "#a49e9e9d",
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
          <p style={{ color: "blue" }}>not found</p>
        )}
      </div>
    </ContactWrapper>
  );
};

export default PhoneBook;

import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ContactWrapper, PhoneInput, Span } from "../styled/StyledComponents";
import { phoneContact } from "../data/Data";

const PhoneBook = () => {
  const [searchName, setSearchName] = useState<string>("");

  const navigate = useNavigate();

  const ascendingArray = phoneContact.sort((a, b) =>
    a.contactName.localeCompare(b.contactName)
  );

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
            <Span key={index}>
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
                  width: "10rem",
                  // textOverflow: "ellipsis",
                  // overflow: "hidden",
                  // whiteSpace: "nowrap",
                }}
              >
                {item.contactName}
              </p>

              {/* <FaRocketchat
                onClick={() => {
                  numberChat(item.number);
                }}
                color="purple"
                size={30}
              /> */}
              {/* <IoIosCall
                size={30}
                color="blue"
                onClick={() => {
                  numberCall(item.number);
                }}
              /> */}
            </Span>
          ))
        ) : (
          <Span> Contact Number Not Found</Span>
        )}
      </div>
    </ContactWrapper>
  );
};

export default PhoneBook;

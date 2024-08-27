import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  ContactWrapper,
  PhoneInput,
  Span,
} from "../../styled/StyledComponents";
import { phoneContact } from "../../data/Data";

const PhoneBook = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const navigate = useNavigate();

  const ascendingArray = phoneContact.sort((a, b) =>
    a.contactName.localeCompare(b.contactName)
  );

  // const searchedContacts = ascendingArray.filter((item) => {
  //   if (item.contactName) {
  //     return item?.contactName
  //       ?.toLowerCase()
  //       .startsWith(searchValue?.toLocaleLowerCase());
  //   } else {
  //     return null;
  //   }
  // });
  const searchedContacts = ascendingArray.filter((item) => {
    const searchLower = searchValue?.toLocaleLowerCase();
    // the contact name or contact number matches the search value
    const nameMatch = item.contactName?.toLowerCase().startsWith(searchLower);
    const numberMatch = item.number?.startsWith(searchValue);

    return nameMatch || numberMatch;
  });

  return (
    <ContactWrapper>
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          backgroundColor: "#f0ddff",
        }}
      >
        <p className="m-0 text-center font-[600] text-[18px]">
          Phone Book List
        </p>

        <PhoneInput
          placeholder="Search Contact Name... "
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
        />
      </div>

      <div
        style={{
          height: "80%",
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
            <Span
              onClick={() => {
                navigate(
                  `/phoneDetail/${item.id}?item=${encodeURIComponent(
                    JSON.stringify(item)
                  )}`
                );
              }}
              key={index}
            >
              {item.contactName}
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

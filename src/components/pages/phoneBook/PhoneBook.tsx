import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ContactBody,
  ContactWrapper,
  PhoneInput,
  SearchIcon,
  Span,
} from "../../styled/StyledComponents";
// import { phoneContact } from "../../data/Data";

const PhoneBook = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  let phoneContacts = JSON.parse(localStorage.getItem("phoneContacts") || "[]");

  const navigate = useNavigate();

  const ascendingArray = phoneContacts?.sort((a, b) =>
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
  const searchedContacts = useMemo(() => {
    return ascendingArray.filter((item) => {
      const searchLower = searchValue?.toLocaleLowerCase();
      // the contact name or contact number matches the search value
      const nameMatch = item.contactName?.toLowerCase().startsWith(searchLower);
      const numberMatch = item.number?.startsWith(searchValue);

      return nameMatch || numberMatch;
    });
  }, [searchValue, phoneContacts]);

  return (
    <ContactWrapper>
      <div className="search-head">
        <p className="m-0 text-center font-[600] text-[18px]">Contact List</p>
        <div className="relative w-full">
          <PhoneInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search Contact Name... "
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
          />
          <SearchIcon isFocused={isFocused} />
        </div>
      </div>

      <ContactBody>
        {searchedContacts.length > 0 ? (
          searchedContacts?.map((item, index) => (
            <Span
              onClick={() => {
                navigate(
                  `/contact/${item.id}
                  `
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
      </ContactBody>
    </ContactWrapper>
  );
};

export default PhoneBook;

import React from "react";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

const ContactInfoItem = (props) => {
  return (
    <ItemStyles
      className={props.calling ? "calling" : ""}
      onClick={props.handlePhoneButtonClick}
    >
      <div className="icon">{props.icon}</div>
      <div className="info">
        <PText>{props.text}</PText>
      </div>
    </ItemStyles>
  );
};
export default ContactInfoItem;

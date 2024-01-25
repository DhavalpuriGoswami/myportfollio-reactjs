import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
    &:hover {
      background-color: black;
      color: white;
      transition: 0.3s ease background-color;
    }
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function DownloadCVButton({
  btnText = "test",
  btnhref = "test",
  outline = false,
}) {
  return (
    <>
      <ButtonStyle className="button">
        <a className="button" href={btnhref} download="DhavalpuriCV.pdf">
          {btnText}
        </a>
      </ButtonStyle>
    </>
  );
}

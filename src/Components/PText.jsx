import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  p{
    &:hover{
        background-color:var(--deep-dark);
        color:white;
        font-weight: bold;
        transition: 0.9s ease background-color ;  
    }
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";
import { FaDatabase } from "react-icons/fa";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
  }
  .para {
    margin-top: 2rem;
  }
`;

const ServicesSectionItems = ({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) => {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}{<FaDatabase/>}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
};
export default ServicesSectionItems;

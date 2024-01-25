import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServiceSectionItems';
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";


const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

const ServicesSection=()=> {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
        <ServicesSectionItems
        icon={<FaReact />}
        title="React Developer"
        desc="I am develop the websites in React. React is Single-Page Application"
      />
          <ServicesSectionItems
            icon={<DiMongodb />}
            title="mongo & Ms-sql"
            desc="I can Create,Update & delete data in this database"
          />
         
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
export default ServicesSection
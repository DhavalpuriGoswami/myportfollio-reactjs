import React from "react";
import styled from "styled-components";
import AboutInfoItem from "../Components/AboutInfoItem";
import PText from "../Components/PText";
import ContactBanner from "../Components/ContactBanner";
import AboutImg from "../assets/images/dhavalabout.png";
import DownloadCVButton from "../Components/DownloadCVButton";

const About = () => {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Dhaval Goswami</span>
              </p>
              <h2 className="about__heading">A FrontEnd Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Jamnagar, Gujrat. A place of beauty and nature.I
                  always try to learn new Technologies . I also love to create
                  things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in Collage. Coding is also an art
                  for me. I love it and now I have the opportunity to develop
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                </PText>
              </div>
              <DownloadCVButton
                btnText="Download CV"
                btnhref="../assets/Resume/DhavalpuriCV.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Cadmun High School (H.S.C), Jamnagar"]}
              />
              <AboutInfoItem
                title="Collage"
                items={["Shri L. G. Haria School Campus (B.C.A)"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="Languages"
                items={["JavaScript", "REACT"]}
              />
              <AboutInfoItem title="FrontEnd" items={["HTML", "CSS", "Sass"]} />
              <AboutInfoItem
                title="Libraries"
                items={["REACT", "Redux-toolkit"]}
              />
              <AboutInfoItem
                title="UI Libraries"
                items={[
                  "Material UI",
                  "Bootstrap",
                  "Tailwind CSS",
                  "Styled Component",
                ]}
              />
              <AboutInfoItem
                title="Databases"
                items={["MongoDB", "Firebase", "MySql"]}
              />
              <AboutInfoItem title="OS" items={["Linux", "Windows"]} />
              <AboutInfoItem
                title="Issue Tracker"
                items={["Asana", "Jira", "Trello", "Azure-devops"]}
              />
              <AboutInfoItem
                title="Miscellaneous"
                items={["yarn", "npm", "Chrome Dev Tool", "Postman", "Swagger"]}
              />
              <AboutInfoItem
                title="Ver Control"
                items={["Git", "Github", "Gitlab", "BitBucket"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-2022"
                items={[
                  "junior Software Engineer at Vagaro Technologies Pvt. Ltd ",
                ]}
              />
              <AboutInfoItem
                title="2022-2023"
                items={["Software Engineer at Vagaro Technologies Pvt. Ltd "]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
};

export default About;
const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

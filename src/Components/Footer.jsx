import React, { useState } from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import AnimatedIcon from "./AnimatedIcon";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll); 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Dhaval Goswami</h1>
          <PText>
            I am a Software developer from Jamnagar,Gujrat.I am Front-end
            Developer in React.js.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contect",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+91 7016470684",
                path: "tel:+91 7016470684",
              },
              {
                title: "dhavalgoswami2906@gmail.com",
                path: "mailto:dhavalgoswami2906@gmail.com",
              },
              {
                title: "Jamnagar, Gujrat",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/profile.php?id=100008154977342&mibextid=ZbWKwL",
              },
              {
                title: "Twitter",
                path: "https://x.com/dhaval7533?t=1G5Np-YO8_YOkyoyHcKn0w&s=09",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/dhaval__goswami__29?igsh=ank0bWVsbGRtMnV1",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://github.com/DhavalpuriGoswami"
            >
              © 2024 - Dhaval Goswami | Designed By Dhaval Gosawmi - Github
            </a>{" "}
          </PText>
          <Button
            onClick={scrollToTop}
            style={{ display: isVisible ? "inline" : "none" }}
          >
          <AnimatedIcon />
          </Button>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;
export const Heading = styled.h1` 
   text-align: center; 
   color: green; 
`; 
  
export const Content = styled.div` 
   overflowY: scroll; 
   height: 2500px; 
`; 
  
export const Button = styled.div` 
   position:inline;  
   width: 100%; 
   left: 50%; 
   bottom: 40px; 
   height: 20px; 
   font-size: 3rem; 
   z-index: 1; 
   cursor: pointer; 
   color: green; 
`
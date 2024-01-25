import React from "react";
import styled from "styled-components";
import DhavalImg from "../assets/images/Dhavalmain.png";
import Button from "./Button";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import PText from "./PText";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: grey;
      &:hover{
        background-color:tranparent;
        color:black;
        font-weight: bold;
        font-size:20px
        transition: 0.3s ease background-color;  
    }
    }
   
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
    
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Dhaval Goswami</span>
          </h1>
          <div className="hero__img">
            <img src={DhavalImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as Software Engineer for 2 years. I love to make new
              web experiences for the people.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100008154977342&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/dhaval7533?t=1G5Np-YO8_YOkyoyHcKn0w&s=09"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <FiTwitter/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dhaval__goswami__29?igsh=ank0bWVsbGRtMnV1"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <BsInstagram/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dhavalpuri-goswami-119548221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <GrLinkedin/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

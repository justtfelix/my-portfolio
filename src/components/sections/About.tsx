import React from "react";
// Importing Components
import AboutContainer from "../containers/AboutContainer";
import { FlexBox, FlexBlock } from "../Flex";
import GreenNumber from "../GreenNumber";
import SectionTitle from "../titles/SectionTitle";
import HorizontalLine from "../lines/HorizontalLine";
import TextContainer from "../containers/TextContainer";
import { AboutText } from "../Text";

function About() {
  return (
    <AboutContainer>
      <FlexBox>
        <GreenNumber>01.</GreenNumber>
        <SectionTitle>About Me</SectionTitle>
        <HorizontalLine />
      </FlexBox>
      <FlexBlock>
        <TextContainer>
          <AboutText>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My 
            interest in web development started back in 2012 when I decided to try editing custom Tumblr 
            themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </AboutText>
          <AboutText>
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, 
            a start-up, a huge corporation, and a student-led design studio. My main focus these days 
            is building accessible, inclusive products and digital experiences at Upstatement for a variety 
            of clients.
          </AboutText>
          <AboutText>
            I also recently launched a course that covers everything you need to build a web app with 
            the Spotify API using Node & React.
          </AboutText>
        </TextContainer>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;

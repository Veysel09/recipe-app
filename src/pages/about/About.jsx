import { AboutContainer, Image, AboutText, AboutSpan} from "./About.style";
import AboutImg from "../../assets/a.jpg"



const About = () => {
  return (
    <AboutContainer>
      <Image src={AboutImg} alt="" />

      <AboutText>
        {" "}
        <AboutSpan>The aim of the Project</aboutSpan>: Creating a react project styled
        with styled component logic with login/logout feature. It is necessary
        to log in to enter the food details and see the about us page.
        Skills/Tools: React-Router | Styled Component | axios |async/await
      </AboutText>
    </AboutContainer>
  );
};

export default About;

import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
import myResume from "../../assets/DebasreeResume.pdf"
import Skills from "./Skills";
import GitHubCal from "./GitHubCalendar";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Debasree Ghosh</span>
        </h1>
        <Type />
        {/* <p className="about__desc" data-aos="fade-right">
        Aspiring Full Stack Web Developer, capable of coding in languages like JavaScript, HTML and CSS. A rational person, capable of producing innovative ideas spontaneously. A keen observer and always have a craving for knowledge,looking forward to work as a softwear developer engineer in a reputed company.
        </p> */}
        <div className="about__contact center">
          <a
            href="https://github.com/Debasree-3031999"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:debasreeghosh1999@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917003904022"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/debasree-ghosh-673a16212/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <a href={myResume} download="debasree.pdf">
        <button
          className="btnResume">
          Resume
        </button></a>
      </div>
      <Introduction />
      {/* <Timeline /> */}
      <section id="#skills">
        <Techstacks />
      </section>
      {/* <Skills /> */}
      <div style={{display:"flex", align:"center"}}>
      
        {/* <p style={{width:"100%"}}><img  style={{align:"left",width:"100%"}}src="https://github-readme-stats.vercel.app/api/top-langs?username=debasree-3031999&show_icons=true&locale=en&layout=compact" alt="debasree-3031999" /></p> */}

<p style={{width:"50%"}}>&nbsp;<img style={{align:"left",width:"100%"}} align="center" src="https://github-readme-stats.vercel.app/api?username=debasree-3031999&show_icons=true&locale=en" alt="debasree-3031999" /></p>

<p style={{width:"50%",align:"center"}}><img style={{width:"100%",marginTop:"4.5%"}}  src="https://github-readme-streak-stats.herokuapp.com/?user=debasree-3031999&" alt="debasree-3031999" /></p>
</div><div style={{width:"100%"}}><GitHubCal /></div><br></br>
<h2>Data Structure & Algorithm :</h2>
      <li>Arrays</li>
      <li>Strings</li>
      <li>Recursion</li>
      <li>Linked-List</li>
      <li>Dynamic Programing</li>
      <li>Graph</li><br/><br/>
      <h2>Soft Skills :</h2>
      <li>Communication</li>
      <li>Adaptibility</li>
      <li>Teamwork</li>
      <li>Time Management</li>
      
    </>
  );
};

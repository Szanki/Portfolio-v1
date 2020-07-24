import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

export function BioSection() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    // gsap.to(element, 1, {
    //   opacity: 0,
    //   y: -20,
    //   ease: "power4.out",
    // });
  };

  intersection && intersection.intersectionRatio < 0.4
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <div ref={sectionRef} className="bio-container">
      <h1 className="bio-header fadeIn">Background</h1>
      <p className="bio-text fadeIn">
        I am currently a final year student of management and production
        engineering (Master's degree). Currently looking for a job as a frontend
        developer, if you came here then you are probably an employer.
        <br className="bio-text-space" />I started my programming adventure in
        2018, programming involved me so that I decided to become a frontend
        developer. In 2019, I completed a 3-month{" "}
        <span className="bio-text-bold">CodersCamp</span> programming course
        organized by <span className="bio-text-bold">.CodersCrew</span> .
        <br className="bio-text-space" />
        When I'm not in front of the computer screen, I'm probably on the
        football pitch or in the kitchen, where I cook delicious food (Asian /
        Italian). When I have more time, I try to travel (budget).
      </p>
      <h1 className="bio-header fadeIn">Skills</h1>
      <div className="bio-skills fadeIn">
        <div className="bio-skills-language">
          <h1 className="bio-skills-header">Languages</h1>
          <ul className="bio-skills-list">
            <li className="bio-skills-list-item">JavaScript</li>
            <li className="bio-skills-list-item">TypeScript</li>
            <li className="bio-skills-list-item">HTML5</li>
            <li className="bio-skills-list-item">CSS3/Sass</li>
          </ul>
        </div>
        <div className="bio-skills-list">
          <h1 className="bio-skills-header">Frameworks</h1>
          <ul>
            <li className="bio-skills-list-item">ReactJS - Hooks</li>
          </ul>
        </div>
        <div className="bio-skills-libraries-tools">
          <h1 className="bio-skills-header">Tools and Libraries</h1>
          <ul>
            <li className="bio-skills-list-item">Material-UI</li>
            <li className="bio-skills-list-item">Git</li>
            <li className="bio-skills-list-item">CSS in JS</li>
            <li className="bio-skills-list-item">Redux</li>
            <li className="bio-skills-list-item">Basics RWD</li>
          </ul>
        </div>
      </div>
      <h1 className="bio-header fadeIn">Expirience</h1>
      <div className="bio-expirience fadeIn">
        <div className="bio-expirience-item">
          <div className="bio-expirience-item-container">
            <h3 className="bio-expirience-item-position">Kuehne + Nagel</h3>
            <p className="bio-expirience-item-company">Junior Logistics</p>
          </div>
          <p className="bio-expirience-item-date">
            September 2019 - November 2019
          </p>
        </div>
        <div className="bio-expirience-item">
          <div className="bio-expirience-item-container">
            <h3 className="bio-expirience-item-position">
              Clinico Medical Błonie Fresenius Kabi
            </h3>
            <p className="bio-expirience-item-company">
              Intern In SCM&PPS Department
            </p>
          </div>
          <p className="bio-expirience-item-date">
            September 2015-February 2019
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import BookAppImage from "../media/images/bookS.png";
import MateCheckerAppImage from "../media/images/mate-checker.png";
import "../Fontawesome/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";

export function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="grid-container">
        <div className="project-item">
          <h1 className="project-name"> Book Search App </h1>

          <div className="project-image-container">
            <img className="project-image" src={BookAppImage} alt="book-app" />
            <div className="project-image-btns">
              <a href="#!" class="project-image-btn">
                <FontAwesomeIcon icon="eye" />
                <Tooltip
                  title={
                    <span style={{ fontSize: "12px" }}>
                      not available currently, check github please
                    </span>
                  }
                  placement="bottom"
                >
                  <span> Preview</span>
                </Tooltip>
              </a>

              <a
                href="https://github.com/Szanki/book-search-app"
                class="project-image-btn"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "github"]} /> Github
              </a>
            </div>
          </div>

          <p className="project-description">
            A web app that allows user search books by term, from google API.
            User after login via Google OAuth can add any book to his favorite
            list and check price of book on the amazon.
            <br className="project-space" />
            <p className="project-warning">
              Please note the app is in the development. Several things need to
              be added and corrected.
            </p>
            <div className="project-techn">
              <div className="project-techn-item">React - Hooks</div>
              <div className="project-techn-item">Json Server</div>
              <div className="project-techn-item">CSS</div>
              <div className="project-techn-item">HTML</div>
              <div className="project-techn-item">REST</div>
              <div className="project-techn-item">Google OAuth</div>
            </div>
          </p>
        </div>
        <div className="project-item">
          <h1 className="project-name">Office Mate Checker</h1>
          <div className="project-image-container">
            <img
              className="project-image"
              src={MateCheckerAppImage}
              alt="book-app"
            />
            <div className="project-image-btns">
              <a href="#!" class="project-image-btn">
                <FontAwesomeIcon icon="eye" />
                <Tooltip
                  title={
                    <span style={{ fontSize: "12px" }}>
                      not available currently, check github please
                    </span>
                  }
                  placement="bottom"
                >
                  <span> Preview</span>
                </Tooltip>
              </a>
              <a
                href="https://github.com/peleek/Office-Mate-Checker"
                class="project-image-btn"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "github"]} /> Github
              </a>
            </div>
          </div>
          <p className="project-description">
            The application gives the user the ability to create their group
            where everyone will be able to check which events the other user has
            in the calendar. The user can manage (add, delete) events in his
            calendar. Selected users will be able to create global events
            visible on the calendar for each group member.
            <br className="project-space" />
            <p className="project-warning">
              Please note the app is in the development. Several things need to
              be added and corrected.
            </p>
            <div className="project-techn">
              <div className="project-techn-item">React - Hooks</div>
              <div className="project-techn-item">GraphQL</div>
              <div className="project-techn-item">HTML</div>
              <div className="project-techn-item">CSS in JS</div>
              <div className="project-techn-item">Material-UI</div>
              <div className="project-techn-item">TypeScript</div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

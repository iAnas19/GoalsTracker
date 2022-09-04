import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        sourcecode at{" "}
        <a
          href="https://github.com/iAnas19/GoalsTracker"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <div>GoalSetter Ⓒ {new Date().getFullYear()}</div>
      </div>
    </>
  );
};

export default Footer;

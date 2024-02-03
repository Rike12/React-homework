import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <p className="footer">
        This project is coded by{" "}
        <a
          href="https://www.linkedin.com/in/mutiat-adepoju"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mutiat Adepoju
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/Rike12/react-homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://silver-fox-dd94e4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}

import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = () => {
  return (
    <footer className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </footer>
  );
}

export default Footer;
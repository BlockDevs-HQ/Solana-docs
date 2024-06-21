import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FaTelegramPlane } from "react-icons/fa";

const config: DocsThemeConfig = {
  logo: <span>BlockDevs</span>,
  project: {
    link: "https://github.com/SamarthSaxena10/Solana-X-BlockDevs",
  },
  chat: {
    link: "https://t.me/+IeQ3sKQ_LIU4MzY9",
    icon: <FaTelegramPlane />,
  },
};

export default config;

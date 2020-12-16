import React from "react";
import { MemoryRouter } from "react-router-dom";

import "../index.css";

import { Header } from "../components/Header";
import { Notification } from "../components/MenuItem";
import { User } from "../components/User";

export default {
  title: "Header",
  component: Header,
};

const navTabs = [
  { path: "/path1", label: "Nav1" },
  { path: "/path2", label: "Nav2" },
  { path: "/path3", label: "Nav3" },
  { path: "/path4", label: "Nav4", withIndicator: true },
];

const HeaderStory = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

const NotificationStory = (args) => (
  <div
    style={{
      position: "relative",
      width: "fit-content",
      padding: "0 20px",
      marginLeft: "50px",
      lineHeight: "20px",
      color: "#788a9a",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    <span>Nav1</span>
    <Notification {...args} />
  </div>
);

const UserStory = (args) => <User {...args} />;

export const BasicHeader = HeaderStory.bind({});

BasicHeader.args = { navTabs };

export const NavIndicator = NotificationStory.bind({});

NavIndicator.args = { count: 20 };

export const UserWithAvatar = UserStory.bind({});

UserWithAvatar.args = {
  fullName: "Username",
  avatarUrl:
    "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png",
};

import React from "react";

import { Header } from "../components/Header";

import { HOME, BOOKINGS, HISTORY, NOTIFICATIONS } from "../constants/routes";

const navTabs = [
  { path: HOME, label: "Home" },
  { path: BOOKINGS, label: "Bookings" },
  { path: HISTORY, label: "History" },
  { path: NOTIFICATIONS, label: "Notifications", withIndicator: true },
];

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header navTabs={navTabs} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

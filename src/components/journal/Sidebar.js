import React from "react";

import { BsCalendarPlus, BsMoon } from "react-icons/bs";
import { JournalEntries } from "./JournalEntries";
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-nav">
        <h3 className="mt-5">
          <BsMoon />
          <span>Jaime</span>
        </h3>
        <button className="btn__btn">Logout</button>
      </div>
      <div className="new-entry">
        <BsCalendarPlus />
      </div>
      <JournalEntries />
    </aside>
  );
};

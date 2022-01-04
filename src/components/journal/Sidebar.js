import React from "react";
import { BsCalendarPlus, BsMoon } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";
export const Sidebar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    navigate("/auth/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-nav">
        <h3 className="mt-5">
          <BsMoon />
          <span>Jaime</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="new-entry">
        <BsCalendarPlus />
      </div>
      <JournalEntries />
    </aside>
  );
};

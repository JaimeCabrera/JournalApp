import React from "react";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";

export const JournalPage = () => {
  return (
    <div className="journal-content">
      <Sidebar />
      <main>
        <NothingSelected />
      </main>
    </div>
  );
};

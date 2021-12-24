import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotePage = () => {
  return (
    <div className="note-container">
      <NotesAppBar />
      <div className="note-content">
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Some awesome title"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <textarea
            placeholder="what happened today"
            className="form__input"
          ></textarea>
        </div>
        <div className="note-image">
          <img
            src="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
            alt="note"
          />
        </div>
      </div>
    </div>
  );
};

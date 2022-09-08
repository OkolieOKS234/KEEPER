import React from "react";

function Note() {
  return (
    <div className="note">
      <h1 placeholder="Enter the title" contentEditable="true">
        Title
      </h1>
      <p placeholder="Enter the content" contentEditable="" true>
        Content
      </p>
    </div>
  );
}

export default Note;

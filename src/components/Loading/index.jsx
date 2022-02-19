import React from "react";
import "./style.css";

export default function Loading() {
  return (
    <div className="my__loading">
      <div className="brld-wrp">
        <div className="brld">
          <div className="brld__brick brld__brick__1" />
          <div className="brld__brick brld__brick__2" />
          <div className="brld__brick brld__brick__3" />
          <div className="brld__brick brld__brick__4" />
          <div className="brld__brick brld__brick__5" />
          <div className="brld__brick brld__brick__6" />
        </div>
      </div>
    </div>
  );
}

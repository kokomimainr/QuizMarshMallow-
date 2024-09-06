import React, { useState } from "react";
import "./HeaderPage.css";

function HeaderPage({ name, points}) {
  return (
    <>
      <nav>
        <h2>
          {name} ⭐{points}
        </h2>
      </nav>
    </>
  );
}

export default HeaderPage;

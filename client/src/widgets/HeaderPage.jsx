import React, { useState } from "react";
import "./HeaderPage.css";

function HeaderPage() {
  const [points, setPoints] = useState(0);

  return (
    <>
      <nav>
        <img src="/public/zvezda.png" width="20px" alt="звездо4ка" /> {points}
      </nav>
    </>
  );
}

export default HeaderPage;

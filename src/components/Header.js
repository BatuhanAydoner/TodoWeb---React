import React from "react";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1 className="main-title">{props.title}</h1>
      </header>
    </div>
  );
};

export default Header;

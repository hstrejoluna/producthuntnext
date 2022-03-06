import React from "react";
import Search from "../ui/Search";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Search />

          {/* Nav here */}
        </div>

        <div>{/* Admin menu here */}</div>
      </div>
    </header>
  );
};

export default Header;

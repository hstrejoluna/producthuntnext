import React from "react";
import Search from "../ui/Search";
import Navigation from "./Navigation";


const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Search />

          <Navigation />
        </div>

        <div>{/* Admin menu here */}</div>
      </div>
    </header>
  );
};

export default Header;

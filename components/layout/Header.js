import React from "react";
import Search from "../ui/Search";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Search />

          <Navigation />
        </div>

        <div>
          <p>Hello: Nicole</p>
          <button type="button">Logout</button>

          <Link href="/">Login</Link>
          <Link href="/">Create Account</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

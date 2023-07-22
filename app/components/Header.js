"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  useState;
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Anton</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

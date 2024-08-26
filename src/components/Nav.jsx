"use client";
import React from "react";
import Link from "next/link";
const Nav = () => {
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];

  const logout = () => {
    console.log("logout");
  };
  return (
    <nav className="h-[50px] flex justify-between items-center py-10 font-bold text-lg">
      <Link className="font-bold text-2xl" href={"/"}>Lamamia</Link>
      <div className="text-myColor flex items-center justify-between gap-5">
        {links.map((ele) => (
          <Link className="" key={ele.id} href={ele.url}>
            {ele.title}
          </Link> 
        ))}
      <button onClick={logout} className="px-2 border-none bg-[#53c28b] text-white rounded-sm  cursor-pointer">logout</button>
      </div>
    </nav>
  );
};

export default Nav;

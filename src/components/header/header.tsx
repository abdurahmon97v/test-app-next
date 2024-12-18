import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-[30px] bg-blue-500 flex justify-center gap-[30px]">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/users"}>Users</Link>
    </header>
  );
};

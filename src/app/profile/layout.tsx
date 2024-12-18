import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="h-[80vh] p-[30px] bg-cyan-400 w-[300px]">
        <Link href={"/profile/address"}>Address</Link>
      </div>
      <div className="p-[30px]">{children}</div>
    </div>
  );
};

export default ProfileLayout;

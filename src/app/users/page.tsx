import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/users/21"}>User1</Link>
        </li>
        <li>
          <Link href={"/users/22"}>User2</Link>
        </li>
        <li>
          <Link href={"/users/23"}>User3</Link>
        </li>
        <li>
          <Link href={"/users/24"}>User4</Link>
        </li>
        <li>
          <Link href={"/users/25"}>User5</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;

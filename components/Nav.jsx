import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 w-full mb-10 rounded-full">
      <Link href="/" className="flex items-center flex-shrink-0  mr-6">
        <Image
          src="/assets/images/blog-icon.png"
          height={40}
          width={40}
          alt="logo"
        />
        <span className="font-bold text-xl tracking-tight hover:underline">
          BloggIn
        </span>
      </Link>
    </nav>
  );
};

export default Nav;

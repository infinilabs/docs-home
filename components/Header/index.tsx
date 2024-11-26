"use client";

import Image from "next/image";
import Link from "next/link";


export default function Header() {

  return (
    <header className="relative inset-x-0 top-0 z-50 bg-black px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-4"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <Image
              width={204}
              height={38}
              alt="INFINILabs-logo"
              src="/assets/logo/INFINILabs.svg"
              className=""
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

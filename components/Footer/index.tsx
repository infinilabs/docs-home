"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="mx-auto pt-10 w-full max-w-container pb-2 px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48"
      aria-labelledby="footer-heading"
    >
      <div className="flex justify-between items-center flex-wrap py-4 pt-14">
        <div></div>
        <div className="text-sm/6 text-slate-400">©2024 INFINI Labs , All Rights Reserved.</div>
        <div className="flex justify-between items-center gap-6">
          
          <a href="https://discord.com/invite/4tKTMkkvVX" target={"_blank"}>
            <Image
              width={24}
              height={24}
              alt="Discord"
              src="/assets/icons/discord.svg"
              className=""
            />
          </a>
          <a href="https://github.com/infinilabs" target={"_blank"}>
            <Image
              width={24}
              height={24}
              alt="Github"
              src="/assets/icons/github.svg"
              className=""
            />
          </a>
        </div>
      </div>
      
    </footer>
  );
}

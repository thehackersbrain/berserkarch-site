import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  // { name: "Projects", href: "/projects", target: "" },
  { name: "Wiki", href: "https://wiki.berserkarch.xyz", target: "_blank" },
  { name: "Gitlab", href: "https://gitlab.com/berserkarch/", target: "_blank" },
  { name: "Download", href: "https://drive.google.com/drive/folders/14sOpnU4iMUeivxWvj9rvctVFgGUbXiAq", target: "_blank" },
  { name: "Contact", href: "/contact", target: "" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.target}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Berserk Arch
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          <b>Berserk Arch</b> is a bleeding-edge, security-centric{" "}
          <Link
            target="_blank"
            href="https://archlinux.org"
            className="underline duration-500 hover:text-zinc-300"
          >
            Arch
          </Link>
          -based Linux distribution crafted for hackers, developers, and nerds alike.
        </h2>
      </div>
    </div>
  );

}

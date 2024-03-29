"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation"; 
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/functions";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 sm:px-9 px-3">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route, index) => (
            <li
              className={cn(
                "hover:text-white flex items-center transition relative",
                {
                  "text-accent": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
              key={index}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

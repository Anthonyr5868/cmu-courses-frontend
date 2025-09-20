import { Link } from "@tanstack/react-router";
import { Clock, SearchMd, Star01, UserSquare, Sun, LogOut01 } from "@scottylabs/corgi";
import { useState } from "react";
import type { ReactElement } from "react";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-6 bg-gray-100 shadow-lg">
      <div className="flex flex-initial cursor-pointer flex-row justify-start font-semibold text-gray-800">
        <Link to="/">
          <div className="flex items-center">
            <img src="/favicon.png" className="w-8 rounded" />
            <span className="ml-2">CMU Courses</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <HeaderLink text="Search" icon={<SearchMd />} link="/" />
        <HeaderLink text="Instructors" icon={<UserSquare />} link="/instructors" />
        <HeaderLink text="Saved" icon={<Star01 />} link="/saved" />
        <HeaderLink text="Schedules" icon={<Clock />} link="clock" />
      </div>
      <div className="flex flex-row items-center justify-between gap-x-2 text-gray-600">
        <NavbarButtons />
      </div>
    </div>
  );
}

type HeaderLinkProps = {
  text: string;
  icon: ReactElement;
  link: string;
};

function HeaderLink({ text, icon, link }: HeaderLinkProps) {
  return (
    <Link to={link}>
      <div className="flex flex-row items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition">
        {icon}
        <span>{text}</span>
      </div>
    </Link>
  );
}


function NavbarButtons() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-12 h-6 flex items-center rounded-full border border-gray-300 bg-gray-100 dark:bg-gray-800 transition-all"
      >
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <Sun className="w-4 h-4 text-gray-600" />
        </div>
      </button>

      <button className="flex items-center space-x-2 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-100 transition">
        <LogOut01 className="w-4 h-4" />
        <span className="text-sm font-medium">Sign out</span>
      </button>
    </div>
  );
}

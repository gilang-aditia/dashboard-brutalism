import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuProps {
  label: string;
  href: string;
  icon: ReactNode;
}

export const Menu = ({ label, href, icon }: MenuProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`mb-2 flex items-center space-x-3 border-3 border-black px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
        isActive
          ? "bg-green-400 text-black"
          : "bg-white text-black hover:bg-pink-200"
      }`}
    >
      <div className="border-2 border-black bg-blue-300 p-1">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

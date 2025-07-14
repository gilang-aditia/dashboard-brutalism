import { BellIcon, MenuIcon } from "lucide-react";
import NotificationPopover from "./notification";
import { HeaderProfil } from "./header-profil";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-red-400 px-4 py-3 shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between">
        {/* Sidebar Toggle Button (hidden on large screens) */}
        <button
          onClick={toggleSidebar}
          className="border-3 border-black bg-green-400 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] lg:hidden"
          aria-label="Toggle sidebar"
        >
          <MenuIcon className="h-6 w-6 text-black" />
        </button>

        {/* Right Section: Notification and Profile */}
        <div className="ml-auto flex items-center gap-4">
          <NotificationPopover
            trigger={<BellIcon className="h-6 w-6 text-black" />}
            alert="ADA NOTIFIKASI"
          />

          <HeaderProfil />
        </div>
      </div>
    </header>
  );
}

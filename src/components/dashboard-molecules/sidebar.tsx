import { Aperture } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children: React.ReactNode;
}

export const Sidebar = ({ isOpen, children }: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full w-64 transform border-4 border-black bg-blue-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:sticky lg:top-0 lg:z-auto lg:min-h-screen lg:w-64 lg:translate-x-0 xl:w-56`}
    >
      {/* Header section */}
      <div className="flex items-center justify-center gap-2 border-b-4 border-black bg-purple-500 p-4">
        <div className="rounded-none border-2 border-black bg-white p-1">
          <Aperture className="h-6 w-6 text-purple-500" />
        </div>
        <span className="text-lg font-black tracking-tight text-white uppercase">
          Dashboard
        </span>
      </div>

      {/* Scrollable menu section */}
      <div className="flex-grow overflow-y-auto">
        <div className="p-4">{children}</div>
      </div>
    </aside>
  );
};

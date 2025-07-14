import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface NotificationPopoverProps {
  trigger: ReactNode;
  alert: string;
}

const NotificationPopover: React.FC<NotificationPopoverProps> = ({
  trigger,
  alert,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative border-3 border-black bg-cyan-400 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none">
          {trigger}
          {/* Indikator notifikasi belum dibaca */}
          <span className="absolute -top-1 -right-1 block h-4 w-4 animate-bounce border-2 border-black bg-red-500" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-80 border-4 border-black bg-white p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-4 border-black bg-pink-300 px-4 py-3">
          <span className="text-sm font-black text-black uppercase">
            {alert} (0)
          </span>
          <button className="border-2 border-black bg-blue-400 px-3 py-1 text-xs font-black text-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-blue-300 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            Baca Semua
          </button>
        </div>

        {/* Notifikasi kosong */}
        <div className="max-h-64 overflow-y-auto px-4 py-6 text-sm font-bold text-black">
          Tidak ada notifikasi
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black bg-gray-200 px-4 py-3">
          <a
            href="#"
            className="text-xs font-bold text-black uppercase hover:text-purple-600"
          >
            0 Notifikasi lainnya
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;

import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

export function HeaderProfil() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="border-3 border-black bg-orange-400 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-orange-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <Avatar className="h-8 w-8 border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="mt-2 w-48 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <DropdownMenuLabel className="border-b-4 border-black bg-lime-300 font-black text-black uppercase">
          Akun Saya
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-1 bg-black" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer border-b-2 border-black font-bold text-black hover:bg-red-200 focus:bg-red-200">
            <LogOut className="mr-2 h-4 w-4 text-red-500" />
            <span className="uppercase">Keluar</span>
            <DropdownMenuShortcut className="font-black">
              ⇧⌘Q
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

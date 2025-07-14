import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { DashboardMenus } from "./data/menu";
import { Menu } from "./layout-menu";

export default function DashboardMenu() {
  return (
    <div className="space-y-2">
      {DashboardMenus.map((menu) =>
        !menu.links ? (
          <Menu
            key={menu.id}
            label={menu.label}
            href={menu.href}
            icon={menu.icon}
          />
        ) : (
          <div
            key={menu.id}
            className="border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Accordion type="single" collapsible className="p-0">
              <AccordionItem value={menu.id} className="border-none">
                <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-black text-black uppercase hover:bg-cyan-200 hover:no-underline">
                  <span className="flex items-center space-x-3">
                    <div className="border-2 border-black bg-purple-400 p-1">
                      {menu.icon}
                    </div>
                    <span>{menu.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-1 border-t-2 border-black bg-gray-100 pr-4 pb-2 pl-4">
                  {menu.links.map((link) => (
                    <Menu
                      key={link.href}
                      label={link.label}
                      href={link.href}
                      icon={link.icon}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      )}
    </div>
  );
}

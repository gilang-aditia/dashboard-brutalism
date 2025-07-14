import { cn } from "../../lib/utils";
import type { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface CustomAlertProps {
  status: "warning" | "info" | "success" | "error";
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function CustomAlert({
  status,
  title,
  description,
  icon,
  className,
}: CustomAlertProps) {
  const statusStyles = {
    warning: "bg-orange-400 border-orange-600 text-black",
    info: "bg-blue-400 border-blue-600 text-black",
    success: "bg-green-400 border-green-600 text-black",
    error: "bg-red-400 border-red-600 text-white",
  };

  const iconBgStyles = {
    warning: "bg-orange-600",
    info: "bg-blue-600",
    success: "bg-green-600",
    error: "bg-red-600",
  };

  return (
    <Alert
      className={cn(
        "flex transform items-center border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
        statusStyles[status],
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            "mr-4 rounded-none border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            iconBgStyles[status],
          )}
        >
          <div className="text-lg text-white">{icon}</div>
        </div>
      )}

      <div className="flex-1">
        <AlertTitle className="mb-1 text-lg font-black tracking-wide uppercase drop-shadow-sm">
          {title}
        </AlertTitle>
        <AlertDescription className="text-sm leading-relaxed font-bold">
          {description}
        </AlertDescription>
      </div>
    </Alert>
  );
}

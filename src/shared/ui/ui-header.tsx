import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({className, right}: {className?: string, right?: ReactNode }) {
  return ( 
  <header className={clsx("px-4 py-4 h-[70px] border-b border-slate-300 bg-white flex justify-between items-center", className)}>
    <UiLogo className="text-teal-900 font-bold text-sm italic" />
    {right}
  </header>
  )
}
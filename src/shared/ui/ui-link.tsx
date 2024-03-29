import clsx from "clsx";
import {Children} from "react";
import Link from "next/link"

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({className, ...props}: UiLinkProps) {

  return (
  <Link {...props} className={clsx(className, "p-1 text-teal-600 cursor-pointer hover:text-teal-800 transition-all")} />
  );
}
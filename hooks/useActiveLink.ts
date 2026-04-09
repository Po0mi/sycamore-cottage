"use client";

import { usePathname } from "next/navigation";

const useActiveLink = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return { activeLink: pathname, isActive };
};

export default useActiveLink;

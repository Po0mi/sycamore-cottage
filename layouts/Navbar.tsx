"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/tree-svgrepo-com.svg";
import useNavMenu from "@/hooks/useNavMenu";
import useScrolled from "@/hooks/useScrolled";
import useActiveLink from "@/hooks/useActiveLink";
import useNavbarAnimation from "@/hooks/useNavbarAnimation";
import "./Navbar.scss";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Join The Team", href: "/careers" },
];

const CTA: NavLink = { label: "Book A Tour", href: "/book-tour" };

const Navbar = () => {
  const { isOpen, toggle, close } = useNavMenu();
  const scrolled = useScrolled(60);
  const { isActive } = useActiveLink();
  const { navRef } = useNavbarAnimation();

  return (
    <div ref={navRef}>
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}${isOpen ? " menu-open" : ""}`}
      >
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo" onClick={close}>
            <Image
              src={logo}
              alt="Sycamore Cottage logo"
              className="navbar-logo-img"
              width={40}
              height={40}
            />
            <div className="navbar-logo-text">
              <span className="navbar-logo-mark">Sycamore</span>
              <span className="navbar-logo-sub">Cottage</span>
            </div>
          </Link>

          <ul className="navbar-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="navbar-link">
                <Link href={href} className={isActive(href) ? "active" : ""}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <Link href={CTA.href}>{CTA.label}</Link>
          </div>

          <button
            className={`navbar-hamburger${isOpen ? " open" : ""}`}
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`navbar-mobile${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="navbar-mobile-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="navbar-mobile-link">
              <Link
                href={href}
                className={isActive(href) ? "active" : ""}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-cta">
          <Link href={CTA.href} onClick={close}>
            {CTA.label}
          </Link>
        </div>

        <span className="navbar-mobile-footer">© 2026 Sycamore Cottage</span>
      </div>
    </div>
  );
};

export default Navbar;

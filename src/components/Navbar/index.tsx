import React, { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "#/public/assets/logo.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type MenuLiProps = {
  label: string;
  href: string;
};

const MenuLi: React.FC<MenuLiProps> = ({ label, href }) => {
  return (
    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
      <Link href={href}>{label}</Link>
    </li>
  );
};

type SideBarMenuLiProps = {
  label: string;
  href: string;
  setSideBarOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarMenuLi: React.FC<SideBarMenuLiProps> = ({ label, href, setSideBarOn }) => {
  return (
    <Link href={href}>
      <li onClick={() => setSideBarOn(false)} className="py-4 text-sm">
        {label}
      </li>
    </Link>
  );
};

const Navbar = () => {
  const [sideBarOn, setSideBarOn] = useState(false);
  const [shadow, setShadow] = useState(true);

  const handleNav = () => {
    setSideBarOn((prev) => !prev);
  };

  const handleShadow = useCallback(() => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [handleShadow]);

  const links = useMemo(() => {
    return [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Projects", href: "/#projects" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/#contact" },
    ];
  }, []);

  return (
    <div className={`fixed w-full h-20 z-[100] bg-[#ecf0f3] ${shadow && " shadow-xl ease-in-out duration-300"}`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link legacyBehavior href="/">
          <a>
            <Image src={NavLogo} alt="/" height="80" className="cursor-pointer" />
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {links.map((link, index) => (
              <MenuLi key={index} label={link.label} href={link.href} />
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          sideBarOn
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden ease-in duration-500"
            : "ease-in duration-500"
        }
      >
        <div
          className={
            sideBarOn
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3]  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link legacyBehavior href="/">
                <a>
                  <Image src={NavLogo} width="87" height="35" alt="/" />
                </a>
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((link, index) => (
                <SideBarMenuLi key={index} label={link.label} href={link.href} setSideBarOn={setSideBarOn} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

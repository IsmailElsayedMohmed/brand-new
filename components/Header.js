import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useGlobalContext } from "@/context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import _ from "lodash";

export default function Header() {
  const [openLinks, setOpenLinks] = useState(false);
  const router = useRouter();
  const ulLinksHeight = useRef(null);
  const { user, logout, item } = useGlobalContext();
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const getLinksHeight = (params) => {
    const links = ulLinksHeight.current.getBoundingClientRect();
    return links.height;
  };
  const heightLinks = {
    height: openLinks ? `${getLinksHeight()}px` : 0,
  };
  const uniqe = _.uniqBy(item, "id").length;
  return (
    <header className="bg-cyan-100 pb-4 shadow-xl">
      <div className="flex  justify-between items-center container  pt-4">
        <div className="hidden sm:block ">
          <Link href="/">
            <a
              className="text-cyan-900 font-bold rounded-full shadow-lg p-2 hover:text-red-900 
        hover:bg-red-200 transition-all  bg-cyan-200 text-xl sm:text-2xl font-serif italic"
            >
              Brand New
            </a>
          </Link>
        </div>

        <ul className="sm:flex space-x-10 hidden ">
          <Link className={`cursor-pointer`} href="/">
            <a
              className={`hover:bg-cyan-300 rounded-md p-2 cursor-pointer ${
                router.pathname === "/" && "bg-cyan-300"
              }`}
            >
              Home
            </a>
          </Link>
          <Link className={`cursor-pointer `} href="/about">
            <a
              className={`hover:bg-cyan-300 rounded-md p-2 ${
                router.pathname === "/about" && "bg-cyan-300"
              }`}
            >
              About
            </a>
          </Link>
          <Link className={`cursor-pointer `} href="/products">
            <a
              className={`hover:bg-cyan-300 rounded-md p-2 ${
                router.pathname === "/products" && "bg-cyan-300"
              }`}
            >
              Products
            </a>
          </Link>
          {user && user.username === "som3aElsayed" && (
            <Link className={`cursor-pointer `} href="/dashboard">
              <a
                className={`hover:bg-cyan-300 rounded-md p-2 ${
                  router.pathname === "/dashboard" && "bg-cyan-300"
                }`}
              >
                Dashboard
              </a>
            </Link>
          )}
        </ul>
        <div className="flex space-x-4">
          <div className="relative">
            <Link href="/cart">
              <a>
                <FaShoppingCart className="text-cyan-800  text-3xl" />
                <span className="absolute flexs -right-2 -top-3 w-6 h-6 rounded-full bg-cyan-400  text-cyan-900">
                  {uniqe}
                </span>
              </a>
            </Link>
          </div>
          {!user ? (
            <Link href="/login">
              <a className="bg-cyan-600 text-cyan-50 hover:bg-cyan-700 transition-all   font-semibold italic rounded-lg shadow-lg px-6 py-1 hover:text-cyan-300">
                Login
              </a>
            </Link>
          ) : (
            <div className="relative">
              <span className="bg-cyan-600 text-cyan-50 hover:bg-cyan-700 transition-all   font-semibold italic rounded-lg shadow-lg px-6 py-1 hover:text-cyan-300">
                {user.username}
              </span>
              <button
                onClick={logout}
                className="absolute whitespace-nowrap cursor-pointer py-px top-8 left-8  rounded-lg   text-center  px-4 bg-cyan-600 font-bold hover:bg-cyan-700 trnasition-all text-rose-300 "
              >
                Log Out
              </button>
            </div>
          )}
        </div>
        <div
          className="block sm:hidden text-2xl text-cyan-900 cursor-pointer"
          onClick={() => setOpenLinks(!openLinks)}
        >
          <VscThreeBars />
        </div>
      </div>

      <div
        className="overflow-hidden h-0  transition-all my-2 sm:hidden "
        style={heightLinks}
      >
        <ul className="flex flex-col" ref={ulLinksHeight}>
          <Link href="/">
            <a
              className={`hover:bg-cyan-300 p-3 mt-1 text-lg italic
            ${router.pathname === "/" && "bg-cyan-300"}
            `}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`hover:bg-cyan-300 p-3  mt-1 text-lg italic
            ${router.pathname === "/about" && "bg-cyan-300"}
            `}
            >
              About
            </a>
          </Link>
          <Link href="/products">
            <a
              className={`hover:bg-cyan-300 p-3 mt-1 text-lg italic
            ${router.pathname === "/products" && "bg-cyan-300"}
            `}
            >
              Products
            </a>
          </Link>
          {user && user.username === "som3aElsayed" && (
            <Link className={`cursor-pointer `} href="/dashboard">
              <a
                className={`hover:bg-cyan-300 rounded-md p-2 ${
                  router.pathname === "/dashboard" && "bg-cyan-300"
                }`}
              >
                Dashboard
              </a>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}

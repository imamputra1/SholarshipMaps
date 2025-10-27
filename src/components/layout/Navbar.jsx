/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `px-5 py-4 border-r border-r-[#101419] h-full transition-all hover:text-white ${
      location.pathname === path
        ? "border-b-2 border-[#FEA55F] text-white"
        : "border-b-2 border-b-transparent"
    }`;

  return (
    <div
      className="h-screen flex flex-col bg-[#010c15] items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url("/black-hole.webp")` }}
    >
      <div className="custom-size bg-[#101419]/[99%] rounded-lg flex flex-col overflow-hidden">
        <header className="grid grid-cols-12 text-[#cbced3] items-center flex-shrink-0">
          <div className="lg:col-span-2 col-span-11 bg-[#101419] lg:border-r border-[#101419] py-4 pl-4">
            <span>Ah Bingung!</span>
          </div>

          <div className="col-span-10 hidden lg:block">
            <nav className="flex items-center">
              <Link to="/" className={linkClass("/")}>_home</Link>
              <Link to="/calender" className={linkClass("/calender")}>_calender</Link>
              <Link to="/roadmap" className={linkClass("/roadmap")}>_roadmap</Link>
              <Link to="/saran" className={`${linkClass("/saran")} border-l border-l-[#101419]`}>_saran</Link>
            </nav>
          </div>

          <button
            className="justify-self-center text-xl block lg:hidden"
            onClick={() => setNavbar((prev) => !prev)}
          >
            {navbar ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </header>

        <AnimatePresence>
          {navbar ? (
            <motion.div
              className="flex flex-col h-full lg:hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Mobile navigation links can be added here */}
            </motion.div>
          ) : (
            <main className="w-full flex-grow overflow-y-auto">
              {children}
            </main>
          )}
        </AnimatePresence>

        <footer className="lg:flex items-center justify-between text-[#607B96] hidden flex-shrink-0">
            {/* Your footer content here */}
        </footer>
      </div>
    </div>
  );
}

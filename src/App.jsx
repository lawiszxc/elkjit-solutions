import { useState } from "react";

import Home from "./pages/Home";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

import { Separator } from "./components/ui/separator";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "flex items-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:text-accent";

  const mobileNavLinkClass =
    "flex w-full items-center gap-3 rounded-md px-3 py-3 font-semibold transition-colors duration-200 hover:bg-white/5 hover:text-accent";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#101827]">
      {/* Main Container */}
      <div className="mx-auto flex min-h-screen w-full max-w-[1080px] flex-col border-x border-muted-foreground">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex min-h-20 w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 bg-[#101827] px-4 py-4 text-primary-foreground sm:px-6 lg:flex-nowrap lg:gap-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2 text-base font-extrabold tracking-tight transition-opacity duration-200 hover:opacity-80 sm:text-lg lg:shrink-0 lg:text-xl"
          >
            <FaComputer
              size={24}
              className="shrink-0 text-primary sm:size-[25px]"
            />

            <span className="whitespace-nowrap">
              ELKJ <span className="font-light">I.T.</span> SOLUTIONS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
            <a className={navLinkClass} href="#home">
              <AiOutlineHome size={20} />
              Home
            </a>

            <a className={navLinkClass} href="#about-us">
              <IoAlertCircleOutline size={20} />
              About Us
            </a>

            <a className={navLinkClass} href="#our-services">
              <MdMiscellaneousServices size={20} />
              Our Services
            </a>

            <a className={navLinkClass} href="#projects">
              <AiOutlineProject size={20} />
              Projects
            </a>
          </div>

          {/* Desktop Contact Button */}
          <a
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-primary-foreground/40 px-4 py-2 font-semibold transition-all duration-200 hover:-translate-y-0.5 lg:inline-flex"
            href="#contact-us"
          >
            <GrContact size={20} />
            Contact Us
          </a>

          {/* Mobile and Tablet Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary-foreground/20 transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>

          {/* Mobile and Tablet Navigation */}
          {menuOpen && (
            <div
              id="mobile-navigation"
              className="flex w-full basis-full flex-col gap-1 border-t border-muted-foreground/50 pt-3 lg:hidden"
            >
              <a
                className={mobileNavLinkClass}
                href="#home"
                onClick={closeMenu}
              >
                <AiOutlineHome size={20} />
                Home
              </a>

              <a
                className={mobileNavLinkClass}
                href="#about-us"
                onClick={closeMenu}
              >
                <IoAlertCircleOutline size={20} />
                About Us
              </a>

              <a
                className={mobileNavLinkClass}
                href="#our-services"
                onClick={closeMenu}
              >
                <MdMiscellaneousServices size={20} />
                Our Services
              </a>

              <a
                className={mobileNavLinkClass}
                href="#projects"
                onClick={closeMenu}
              >
                <AiOutlineProject size={20} />
                Projects
              </a>

              <a
                className={`${mobileNavLinkClass} mt-1 border border-primary-foreground/30`}
                href="#contact-us"
                onClick={closeMenu}
              >
                <GrContact size={20} />
                Contact Us
              </a>
            </div>
          )}
        </nav>

        {/* Horizontal Separator */}
        <div className="shrink-0 px-4 sm:px-6 lg:px-10">
          <Separator className="bg-muted-foreground" />
        </div>

        {/* Page Content */}
        <main className="flex w-full min-w-0 flex-1 flex-col gap-12 px-4 py-7 sm:gap-14 sm:px-6 lg:gap-18 lg:px-10">
          <Home />
          <AboutUs />
          <OurServices />
          <Projects />
          <ContactUs />
        </main>
      </div>
    </div>
  );
}

export default App;

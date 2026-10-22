import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Separator } from "./components/ui/separator";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const link = event.target.closest?.('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - 96;

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 900;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);

        const ease =
          progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const navLinkClass =
    "flex items-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-primary";

  const mobileNavLinkClass =
    "flex w-full items-center gap-3 rounded-md px-3 py-3 font-semibold transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-primary";

  const closeMenu = () => setMenuOpen(false);

  const sectionAnimation = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#101827]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1080px] flex-col border-x border-muted-foreground">
        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 flex min-h-20 w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 bg-[#101827]/95 px-4 py-4 text-primary-foreground backdrop-blur-md sm:px-6 lg:flex-nowrap lg:gap-6 lg:px-10"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2 text-base font-extrabold tracking-tight transition-all duration-300 hover:scale-[1.02] sm:text-lg lg:shrink-0 lg:text-xl"
          >
            <FaComputer size={24} className="shrink-0 text-primary" />
            <span className="whitespace-nowrap">
              ELKJ <span className="font-light">I.T.</span> SOLUTIONS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
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

          {/* Contact Button */}
          <a
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-primary-foreground/40 px-4 py-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 lg:inline-flex"
            href="#contact-us"
          >
            <GrContact size={20} />
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary-foreground/20 transition-all duration-300 hover:rotate-3 hover:bg-white/10 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile and Tablet Navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex w-full basis-full flex-col gap-1 overflow-hidden border-t border-muted-foreground/50 pt-3 lg:hidden"
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <div className="shrink-0 px-4 sm:px-6 lg:px-10">
          <Separator className="bg-muted-foreground" />
        </div>

        {/* Animated Page Sections */}
        <main className="flex w-full min-w-0 flex-1 flex-col gap-12 px-4 py-7 sm:gap-14 sm:px-6 lg:gap-18 lg:px-10">
          <motion.div {...sectionAnimation}>
            <Home />
          </motion.div>

          <motion.div {...sectionAnimation}>
            <AboutUs />
          </motion.div>

          <motion.div {...sectionAnimation}>
            <OurServices />
          </motion.div>

          <motion.div {...sectionAnimation}>
            <Projects />
          </motion.div>

          <motion.div {...sectionAnimation}>
            <ContactUs />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default App;

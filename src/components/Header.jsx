import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[72px] fixed top-0 left-0 w-full z-50 transition-all deuration-200"
    >
      <div className="container flex justify-between items-center sm:gap-0 flex-col gap-8 sm:flex-row">
        <Link href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </Link>
        <nav>
          <ul className="flex items-center gap-[50px] ">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`${link} opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

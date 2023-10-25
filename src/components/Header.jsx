import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
      <div className="container mx-auto px-[15px] flex justify-between items-center">
        <Link href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </Link>
        <nav>
          <ul className="flex items-center gap-[50px]">
            <li>
              <Link
                className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                to="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                to="/team"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import DarkModeToggle from "../DarkModeToggle";
import HeaderMenu from "./HeaderMenu";
import LogoSection from "./LogoSection";
import SearchSection from "./SearchSection";

function Header() {
  return (
    <div className="flex items-center justify-between  pt-5">
      <LogoSection />
      <HeaderMenu />
      <DarkModeToggle />
      <SearchSection />
    </div>
  );
}

export default Header;

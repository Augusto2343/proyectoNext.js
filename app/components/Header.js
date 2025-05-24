
import Menu from "./Menu";
import Logo from "./Logo";
const Header = () => {
    return (
        <header className="relative fixed top-0 right-0 w-full">
        <nav className=" relative bg-white border-gray-200 dark:bg-gray-800 opacity-80 content-center p-[30px] z-999 hover:opacity-100">
            <Logo/>
            <Menu/>
        </nav>
        </header>
    
    );

}
export default Header;
import Link from "next/link";

import Logo from "./Logo";
import Search from "./Search";
export default function Hearders() {
  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        {/* add the logo  */}
        <Logo />
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/category" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/letest" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500">
            <Search />
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-transparent text-black p-4 m-53 mr-106 mb-77 ml-107 w-1187">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="logo"
            width={160.46}
            height={42}
          />
        </Link>
        <ul className="font-medium  flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 hidden md:flex">
          <li>
            <Link
              href="/product"
              className="block py-2 pl-3 pr-4 nav-items text-[#0a2640] rounded mmd:p-0"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 pl-3 pr-4 nav-items text-[#0a2640] rounded mmd:p-0"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 pl-3 pr-4 nav-items text-[#0a2640] rounded mmd:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-primary no-underline pr-2 sm:pr-4 md:pr-6 lg:pr-8 border-2 border-gray-900 rounded-full sm:px-6 md:px-8 block py-2 pl-3"
              // className="block py-2 pl-3 nav-items text-[#0a2640] border-2 border-solid login-btn"
            >
              Log In
            </a>
          </li>
        </ul>
        <button className="md:hidden text-primary border-2 border-gray-900 rounded-full px-4 py-2 xs:ms-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

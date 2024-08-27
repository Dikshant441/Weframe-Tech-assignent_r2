import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="m-3 p-2 flex flex-col sm:flex-row justify-around items-center">
      {/* Search Bar */}
      <div className="bg-[#eef7f7] rounded-2xl flex w-full sm:w-1/3 md:w-1/4 lg:w-2/6 mb-2 sm:mb-0">
        <input
          className="flex-grow p-2 border-transparent rounded-l-xl bg-[#eef7f7] placeholder-[#28e3e9] text-sm"
          type="text"
          placeholder="Suchen"
        />
        <button className="text-[#28e3e9] p-2">
          <CiSearch />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 mt-2 sm:mt-0">
        <Link href="#" className="text-[#045a5c] font-bold flex items-center">
          <img
            className="h-5 mr-1"
            src="https://res.cloudinary.com/zoominfo-com/image/upload/w_120,h_120,c_fit/intuitiveai.ca"
            alt="Rezept einlösen"
          />
          Rezept einlösen
        </Link>

        <Link href="#" className="text-[#045a5c] flex items-center">
          <img
            className="h-4 mr-1"
            src="https://agolbach.org/assets/left-bjGcaBLA.png"
            alt="Live Bestand"
          />
          Live Bestand
        </Link>

        <Link href="#" className="text-[#045a5c] flex items-center">
          <img
            className="h-4 mr-1"
            src="https://agolbach.org/assets/left-bjGcaBLA.png"
            alt="Videosprechstunde"
          />
          Videosprechstunde
        </Link>

        <Link href="#" className="text-[#045a5c] flex items-center">
          <img
            className="h-4 mr-1"
            src="https://agolbach.org/assets/left-bjGcaBLA.png"
            alt="FAQs"
          />
          FAQs
        </Link>

        <Link href="#" className="text-[#045a5c] flex items-center">
          <img
            className="h-4 mr-1"
            src="https://agolbach.org/assets/left-bjGcaBLA.png"
            alt="Kontakt"
          />
          Kontakt
        </Link>

        {/* Cart Icon */}
        <Link href="#" className="relative flex items-center">
          <BsCart2 className="text-2xl text-[#28e3e9]" />
          <span className="absolute ml-4 text-[rgb(40,227,233)] bg-opacity-70 bg-[#a2dcde] rounded-full text-xs w-4 h-4 flex items-center justify-center">
            1
          </span>
        </Link>

        {/* Login Button */}
        <Link
          href="#"
          className="p-1 w-24 sm:w-28 text-[#045a5c] bg-[#ecfeaa] text-center rounded-ss-3xl rounded-br-3xl"
        >
          Anmelden
        </Link>
      </div>
    </div>
  );
};

export default Header;

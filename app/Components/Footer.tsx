import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1e9494] w-full h-40 flex flex-row justify-around pt-4">
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-[#045a5c] font-bold flex items-center"
            >
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
          </div>
          <div className="flex mt-6 space-x-4">
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
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <ul>
            <li className="text-sm text-[#8cc6c8]">Standort</li>
            <li className="text-sm font-semibold text-white mt-2">
              BergstaBe 49 - 57
            </li>
            <li className="text-sm font-semibold text-white">69469 Weinheim</li>
            <li className="text-sm font-semibold text-white">
              (3 Glocken Quartier)
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <ul>
            <li className="text-sm text-[#8cc6c8]">Telefon</li>
            <li className="mt-2 text-sm font-semibold text-white">
              0223 545 5250
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <ul>
            <li className="text-sm text-[#5ac8cc]">Öffnungszeiten</li>
            <li className="text-sm text-[#8cc6c8] mt-2">Mo-Fr</li>
            <li className="text-sm font-semibold text-white">09:00 - 18:00</li>
            <li className="text-sm text-[#8cc6c8] mt-2">Sa</li>
            <li className="text-sm font-semibold text-white">09:00 - 14:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

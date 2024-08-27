import { CgArrowLongRight } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsToggle2On } from "react-icons/bs";

const UpperBody = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between m-2">
        <div className="flex ">
          <ul className="flex items-center gap-2 text-[#28e3e9] ">
            <li>Home</li>
            <li>
              <CgArrowLongRight />
            </li>
            <li>Livestand</li>
            <li>
              <CgArrowLongRight />
            </li>
            <li className="text-[#045a5c] font-bold">Cannabis Bluten</li>
          </ul>
        </div>
        <div className="mt-6">
          <ul>
            <li>GKV mit Kostenubernahme?</li>
            <li className="p-1 w-52  text-[#045a5c] text-center rounded-ss-3xl rounded-br-3xl border-2 border-[#28e3e9]">
              Perisoptionen
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between w-full mt-16">
        <h1 className="text-[#045a5c]  text-4xl font-bold flex items-center w-[30%]">
          <img
            className="h-10 mr-5"
            src="https://res.cloudinary.com/zoominfo-com/image/upload/w_120,h_120,c_fit/intuitiveai.ca"
            alt="Rezept einlösen"
          />
          Bluten
        </h1>
        <div className="flex justify-between w-[60%]">
          <div className=" rounded-2xl flex w-[50%]">
            <input
              className="flex-grow p-2 border-transparent rounded-l-xl bg-slate-200 placeholder-[#28e3e9] text-sm"
              type="text"
              placeholder="Suchen"
            />
            <button className="text-[#28e3e9] p-2 bg-slate-200 rounded-r-2xl">
              <CiSearch />
            </button>
          </div>
          <select
            id="dropdown"
            className="bg-[#afeff1] rounded-md text-[#045a5c] ml-5 flex items-center px-5"
          >
            <option value="N/A">Sortieren nach</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="bg-[#afeff1] text-[#045a5c] ml-5 rounded-md flex items-center px-5">
            verfugbarkeit{" "}
            <BsToggle2On className="text-3xl ml-2 text-[#28e3e9]" />
          </div>

          <div className="bg-[#afeff1] text-[#045a5c] ml-5 flex items-center px-3 rounded-md">
            <TfiMenuAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBody;

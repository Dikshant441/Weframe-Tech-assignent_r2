import Card from "./Card";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const Mainbody = () => {
  return (
    <div className="flex w-full my-16  ">
      <div className="flex">
        <div className="w-1/4 ml-10 mr-10">
          <div className=" text-[#045a5c] bg-[#afdfe0] font-bold text-2xl flex justify-center">
            <span className="">Filter</span>
            <div></div>
          </div>

          <div className=" text-[#045a5c] my-10 font-bold text-xl flex justify-center">
            <span>Preis</span>
            <div></div>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-[#045a5c] font-bold text-lg text-center mb-3">
              Hersteller
            </h1>
            <div className="topping text-[#045a5c]">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              ADERXpharma
            </div>
            <div className="topping text-[#045a5c]">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Aurora
            </div>
            <div className="topping text-[#045a5c]">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Avaay
            </div>
            <div className="topping text-[#045a5c]">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Bedrocan
            </div>
            <div className="topping text-[#045a5c]">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Cannamedical
            </div>
          </div>
          <hr />
          <span className="text-[#045a5c] font-semibold flex justify-center my-6">
            Genetik
          </span>
          <div className="flex justify-center gap-2 m-8">
            <h1 className="bg-[#08d6dd] text-white px-2 text-sm  rounded-md">
              Indica
            </h1>
            <h1 className="bg-[#08d6dd] text-[#045a5c] px-2 text-sm  rounded-md">
              Sativa
            </h1>
            <h1 className="bg-[#08d6dd] text-[#045a5c] px-2 text-sm  rounded-md">
              Hybtid
            </h1>
          </div>
          <hr />
          <span className="text-[#045a5c] font-semibold flex justify-center my-6">
            Bestrshltung
          </span>
          <div className="flex justify-center gap-2 my-8">
            <h1 className="bg-[#08d6dd] text-white px-2 text-sm  rounded-md">
              bestrahlt
            </h1>
            <h1 className="bg-[#08d6dd] text-[#045a5c] text-sm  px-2 rounded-md">
              nicht bestrahlt
            </h1>
          </div>
          <hr />
          <div className="m-10">
            <span className="text-[#045a5c] font-semibold flex justify-center my-6">
              Terpene{" "}
              <MdOutlineKeyboardArrowDown className="ml-10 text-2xl text-[#08d6dd] " />
            </span>
          </div>
          <hr />
          <div className="flex justify-center m-8">
            <MdOutlineCancel className="text-2xl text-[#08d6dd]" />
            <span>alle Filter zurucksetzen</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-3/4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Mainbody;

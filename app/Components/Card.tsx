import { BsCurrencyEuro } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="bg-[#b1e2e3] w-64 h-[30rem] rounded-ss-3xl rounded-ee-3xl border-2 border-[#28e3e9]">
        <div className="bg-white h-[12rem] rounded-ss-3xl flex justify-center items-center">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQEukZWJ32KmHpJZUZTqLF9aOi33nx5ujGI_690PLI2DjmVVRfT"
            className="h-[70%]"
          />
        </div>
        <div className="p-4">
          <span className=" text-[#045a5c] font-bold bg-[#97f5f9] p-0.5 px-2 rounded-md">
            Canify
          </span>
          <div className="flex gap-2 my-4 text-sm">
            <h1 className="bg-white rounded-sm px-3">THC 18%</h1>
            <h1 className="bg-[#1bc8ce] text-white rounded-sm px-3">CBD 1%</h1>
          </div>
          <h1 className="text-[#045a5c] font-semibold">
            Cannabis Flos 18/1 PT Mango
          </h1>
          <div className="flex justify-between my-6 text-[#045a5c] ">
            <ul>
              <li>Kultivar</li>
              <li>Mango</li>
            </ul>
            <ul>
              <li>Genetik</li>
              <li>Hybrid</li>
            </ul>
          </div>
          <div className="flex justify-between">
            <span className="flex text-[#045a5c] font-extrabold">
              <BsCurrencyEuro className="text-[#1bc8ce] my-1" />
              11,66
            </span>
            <h1 className="px-5 text-sm text-[#045a5c] bg-[#ecfeaa] text-center rounded-ss-3xl rounded-br-3xl">
              in den Warenkorb
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

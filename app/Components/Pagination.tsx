import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Pagination = () => {
  return (
    <div className="flex justify-end gap-4 items-center mr-8 mb-8">
      <FaArrowLeftLong className="text-[#39cbd0]" />
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>...</h1>
      <h1>12</h1>
      <FaArrowRightLong className="text-[#39cbd0]" />
    </div>
  );
};

export default Pagination;

import { FaBabyCarriage } from "react-icons/fa";

const GlobalSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-white">
      <div class="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

      <div class="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

      <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
      <FaBabyCarriage size={35} />
    </div>
  );
};

export default GlobalSpinner;

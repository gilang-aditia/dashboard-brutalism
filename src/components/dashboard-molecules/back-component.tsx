import { StepBackIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackComponent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-4 mb-6 md:mt-0">
      <button
        onClick={handleBack}
        className="border-3 border-black bg-yellow-400 px-4 py-2 font-black text-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      >
        <span className="flex items-center space-x-2">
          <div className="border-2 border-black bg-red-400 p-1">
            <StepBackIcon className="h-4 w-4" />
          </div>
          <span>Kembali</span>
        </span>
      </button>
    </div>
  );
};

export default BackComponent;

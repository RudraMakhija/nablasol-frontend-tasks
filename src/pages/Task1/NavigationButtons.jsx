const NavigationButtons = ({ onBack, onNext }) => {

  return (

    <div className="flex justify-between items-center mt-6">

      <button
        className="text-blue-500 font-semibold cursor-pointer "
        onClick={onBack}
      >
        ← Back
      </button>

      <button 
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition cursor-pointer"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;

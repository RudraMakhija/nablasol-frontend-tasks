import NavigationButtons from './NavigationButtons';
import CloseButton from './CloseButton';

const Step3 = ({ formData, handleInputChange, handleNext, handleBack }) => {
  return (
    <div className="space-y-8">

<div className="flex justify-end mb-6">
        <CloseButton/>
      </div>

      <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-semibold">Select a view</h2>
      </div>


      <p className="text-gray-500 mb-6 text-center"> You can also customize this views in settings</p>

      <div className="flex justify-center space-x-6 mb-8">
        <div 
          className={`w-40 h-32 border rounded-md flex items-center justify-center cursor-pointer ${
            formData.viewType === 'list' ? 'border-blue-500' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'viewType', value: 'list' } 
          })}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 6h13v2H8V6zm0 5h13v2H8v-2zm0 5h13v2H8v-2zM3 6h3v3H3V6zm0 5h3v3H3v-5zm0 5h3v3H3v-3z" />
              </svg>
            </div>
            <span>List</span>
          </div>
        </div>
        
        <div 
          className={`w-40 h-32 border rounded-md flex items-center justify-center cursor-pointer ${
            formData.viewType === 'board' ? 'border-blue-500' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'viewType', value: 'board' } 
          })}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h4v12H4V6zm6 0h4v12h-4V6zm6 0h4v12h-4V6z" />
              </svg>
            </div>
            <span>Board</span>
          </div>
        </div>
      </div>
      <NavigationButtons 
        onBack={handleBack}
        onNext={handleNext}
      />



    </div>
  );
};

export default Step3;
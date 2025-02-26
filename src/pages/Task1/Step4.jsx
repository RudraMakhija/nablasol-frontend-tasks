import CloseButton from './CloseButton';
import NavigationButtons from './NavigationButtons';

const Step4 = ({ formData, handleInputChange, handleNext, handleBack }) => {

  return (
    <div className="space-y-8">
<div className="flex justify-end mb-6">
        <CloseButton/>
      </div>





      <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-semibold">Who can manage projects</h2>
      </div>

      <p className="text-gray-500 mb-6 text-center">
        Don't panic — You can also customize this permissions in settings
      </p>

      <div className="space-y-4">
        <div 
          className={`p-4 border rounded-md cursor-pointer ${
            formData.accessPermission === 'everyone' ? 'border-blue-500' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'accessPermission', value: 'everyone' } 
          })}
        >
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm7 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-14 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Everyone</h3>
              <p className="text-gray-500 text-sm">
                All users can now to see it, but guests cannot access the projects.
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-4 border rounded-md cursor-pointer ${
            formData.accessPermission === 'onlyAdmins' ? 'border-blue-500' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'accessPermission', value: 'onlyAdmins' } 
          })}
        >
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Only Admin's</h3>
              <p className="text-gray-500 text-sm">
                Only admins can manage everything.
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-4 border rounded-md cursor-pointer ${
            formData.accessPermission === 'specificPeople' ? 'border-blue-500' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'accessPermission', value: 'specificPeople' } 
          })}
        >
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-gray-400">
              {/* People icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Only to Specific people</h3>
              <p className="text-gray-500 text-sm">
                Only some specific people can able to see it
              </p>
            </div>
          </div>
        </div>
      </div>



      <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </div>
  );
};

export default Step4;
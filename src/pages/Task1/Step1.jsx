import CloseButton from './CloseButton';
import NavigationButtons from './NavigationButtons';

const Step1 = ({ formData, handleInputChange, handleNext}) => {

  const handleBack = () => {
    console.log('Back to projects');
  };

  return (

    
    <div className="space-y-8">
      <div className="flex justify-end mb-6">
        <CloseButton/>
      </div>

      <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-semibold">Create a Project</h2>
      </div>

      <div>
        <label htmlFor="projectName" className="block text-sm font-medium mb-2">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          placeholder="Enter project name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="client" className="block text-sm font-medium mb-2">
          Client
        </label>
        <div className="flex items-center space-x-2">
          <select
            id="client"
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a client</option>
          </select>
          <span className="text-gray-400">or</span>
          <button
            type="button"
            className="flex items-center space-x-1 text-blue-500 border border-blue-500 rounded-md py-2 px-4 hover:bg-blue-100"
          >
            <span>+</span> New Client
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="dates" className="block text-sm font-medium mb-2">
          Dates
        </label>
        <div className="flex space-x-2">
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="self-center">-</span>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>



      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Optional"
          className="w-full p-3 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>





      <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </div>
  );
};

export default Step1;

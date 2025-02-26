import NavigationButtons from './NavigationButtons';
import CloseButton from './CloseButton';

const Step2 = ({ formData, handleInputChange, updateBudgetSetting, handleNext, handleBack}) => {
  return (


    <div className="space-y-8">
      <div className="flex justify-end mb-6">
        <CloseButton/>
      </div>

      <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-semibold">Project Type</h2>
      </div>

      <p className="text-gray-500 mb-6 text-center"> Don't panic — You can also customize this types in settings </p>


      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          className={`flex-1 p-3 border rounded-md ${
            formData.projectType === 'hourly' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'projectType', value: 'hourly' } 
          })}
        >
          Time & Materials
        </button>
        
        <button
          type="button"
          className={`flex-1 p-3 border rounded-md ${
            formData.projectType === 'fixedFee' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'projectType', value: 'fixedFee' } 
          })}
        >
          Fixed Fee
        </button>
        
        <button
          type="button"
          className={`flex-1 p-3 border rounded-md ${
            formData.projectType === 'nonBillable' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleInputChange({ 
            target: { name: 'projectType', value: 'nonBillable' } 
          })}
        >
          Non-Billable
        </button>
      </div>




      {formData.projectType === 'hourly' && (
        <>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Hourly</h3>
            <p className="text-gray-500 mb-4">
              We need hourly rates to track your project's billable amount.
            </p>
            
            <div className="flex space-x-2">
              <div className="w-2/3">
                <select
                  name="hourlyRateType"
                  className="w-full p-2 border rounded-md"
                  value={formData.hourlyRateType || "project"}
                  onChange={handleInputChange}
                >
                  <option value="project">Project Hourly Rate</option>



                </select>
              </div>
              <div className="w-1/3">
                <input
                  type="text"
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Budget</h3>
            <p className="text-gray-500 mb-4">
              We need hourly rates to track your project's billable amount.
            </p>
            
            <div className="mb-4">
              <select
                name="hoursPerPerson"
                value={formData.budget.hoursPerPerson}
                onChange={(e) => updateBudgetSetting('hoursPerPerson', e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Hours per Person</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.budget.resetEveryMonth}
                  onChange={(e) => updateBudgetSetting('resetEveryMonth', e.target.checked)}
                  className="mr-2"
                />
                Budget resets every month
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.budget.emailAlert}
                  onChange={(e) => updateBudgetSetting('emailAlert', e.target.checked)}
                  className="mr-2"
                />
                Send email alerts if project exceeds
              </label>
              <input
                type="text"
                value={formData.budget.alertThreshold}
                onChange={(e) => updateBudgetSetting('alertThreshold', e.target.value)}
                className="w-20 p-1 border rounded-md"
              />
              <span>% of budget</span>
            </div>
          </div>
        </>
      )}

<NavigationButtons 
        onBack={handleBack}
        onNext={handleNext}
      />


    </div>
  );
};

export default Step2;
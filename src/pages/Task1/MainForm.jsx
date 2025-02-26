import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const steps = [Step1, Step2, Step3, Step4, Step5, Step6];

const initialFormData = {
  projectName: '',
  client: '',
  startDate: '',
  endDate: '',
  notes: '',
  projectType: 'hourly',
  hourlyRate: '',
  viewType: 'board',
  accessPermission: 'onlyAdmins',
  tasks: [
    { id: 1, name: 'Marketing Website Design', checked: false },
    { id: 2, name: 'Branding Design', checked: false },
    { id: 3, name: 'UI/UX Fundamentals', checked: true },
    { id: 4, name: 'Wireframe and Prototyping', checked: false },
    { id: 5, name: 'Style Guide', checked: false },
    { id: 6, name: 'UX Research and Flows', checked: false },
    { id: 7, name: 'Layout design', checked: false }
  ],
  team: [
    { id: 1, name: 'Steve Mathew', selected: true },
    { id: 2, name: 'Robert Pattinson', selected: false },
    { id: 3, name: 'Steve Waugh', selected: false },
    { id: 4, name: 'Fanny Russell', selected: false },
    { id: 5, name: 'Rodney Meyer', selected: false },
    { id: 6, name: 'Ellen Simmons', selected: false },
    { id: 7, name: 'Virgie Kim', selected: false },
    { id: 8, name: 'Emma Castro', selected: false }
  ],
  budget: {
    hoursPerPerson: '',
    resetEveryMonth: false,
    emailAlert: true,
    alertThreshold: '80.00'
  }
};

const MainForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const updateArrayField = (field, id, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map(item => item.id === id ? { ...item, [key]: value } : item)
    }));
  };

  const updateBudgetSetting = (setting, value) => {
    setFormData((prev) => ({
      ...prev,
      budget: { ...prev.budget, [setting]: value }
    }));
  };

  const handleNavigation = (direction) => {
    setCurrentStep((prev) => prev + direction);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const StepComponent = steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <StepComponent 
          formData={formData}
          handleInputChange={handleInputChange}
          updateTaskStatus={(id, checked) => updateArrayField('tasks', id, 'checked', checked)}
          updateTeamMember={(id, selected) => updateArrayField('team', id, 'selected', selected)}
          updateBudgetSetting={updateBudgetSetting}
          handleNext={() => handleNavigation(1)}
          handleBack={() => handleNavigation(-1)}
          handleSubmit={handleSubmit}
        />



        <div className="flex justify-center space-x-2 mb-4 mt-6">
          {steps.map((_, i) => (
            <div key={i} className={`h-2 w-6 rounded-full ${i + 1 === currentStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainForm;

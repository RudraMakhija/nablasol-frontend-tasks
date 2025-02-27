import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = [
  { id: 1, label: 'Your Profile', component: Step1 },
  { id: 2, label: 'Business Information', component: Step2 },
  { id: 3, label: 'Additional Users', component: Step3 }
];

const initialFormData = {
  firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '',
  brandName: '', brandType: '', streetAddress: '', city: '', zipCode: '', taxIdNumber: '',
  agreements: { electronicallySign: true, nonAdultBeverage: false, coiPdfUpload: true }
};

const validationRules = {
  1: (data) => {
    const errors = {};
    if (!data.firstName.trim()) errors.firstName = 'First name is required';
    if (!data.lastName.trim()) errors.lastName = 'Last name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email format';
    if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) errors.phone = 'Invalid phone format';
    if (data.password.length < 8) errors.password = 'Password must be at least 8 characters';
    if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  },
  2: (data) => {
    const errors = {};
    ['brandName', 'brandType', 'streetAddress', 'city', 'zipCode', 'taxIdNumber'].forEach(field => {
      if (!data[field].trim()) errors[field] = `${field} is required`;
    });
    return errors;
  }
};

const MainForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem('formData')) || initialFormData;
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('currentStep', currentStep.toString());
    }
  }, [formData, currentStep, submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleAgreementToggle = (agreement) => {
    setFormData((prev) => ({
      ...prev,
      agreements: { ...prev.agreements, [agreement]: !prev.agreements[agreement] }
    }));
  };

  const validateStep = () => {
    if (validationRules[currentStep]) {
      const newErrors = validationRules[currentStep](formData);
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length && validateStep()) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === steps.length) {
      alert('Form submitted successfully!');
      setSubmitted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const StepComponent = steps.find(step => step.id === currentStep)?.component || Step1;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7277E5] to-[#6B5DDC] flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-500 font-bold text-xl">Logo</div>
        <div className="text-white text-2xl font-medium">Create New Account</div>
        <div className="text-white text-sm">Contact Us</div>
      </div>
      
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl mx-4 my-4 overflow-hidden">
        <div className="flex">
          {steps.map(step => (
            <div key={step.id} className={`flex-1 flex items-center justify-center py-4 ${currentStep >= step.id ? 'bg-gradient-to-r from-[#A2DEFF] to-[#6BAAFC] text-white' : 'bg-gray-200'}`}>
              <div className="w-6 h-6 rounded-full bg-white text-indigo-500 flex items-center justify-center mr-2">{step.id}</div>
              <span>{step.label}</span>
            </div>
          ))}
        </div>
        <div className="p-8">
          <StepComponent formData={formData} handleChange={handleChange} handleAgreementToggle={handleAgreementToggle} errors={errors} />
        </div>
      </div>
      
      <div className="w-full max-w-4xl flex justify-between mb-8 px-4">
        {currentStep === 1 ? (
          <button onClick={() => alert('Back to Login')} className="flex items-center text-white">
            <ChevronLeft size={20} className="mr-1" /> Back to Login
          </button>
        ) : (
          <button onClick={handlePrevious} className="flex items-center text-white">
            <ChevronLeft size={20} className="mr-1" /> Previous Step
          </button>
        )}
        <button 
          onClick={handleNext} 
          className="px-6 py-2 bg-indigo-400 text-white rounded-md flex items-center" 
          disabled={submitted && currentStep === steps.length}
        >
          {currentStep < steps.length ? 'Next Step' : 'Submit'}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default MainForm;
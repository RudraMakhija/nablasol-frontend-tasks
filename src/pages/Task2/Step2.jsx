import React, { useState, useEffect, useRef } from 'react';
import { Check, X, HelpCircle, ChevronRight } from 'lucide-react';

const InputField = ({ label, name, value, onChange, placeholder, error }) => (
  <div>
    <label className="block text-gray-600 mb-1">
      {label}<span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
    />
    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
  </div>
);

const AgreementItem = ({ label, name, checked, onToggle }) => (
  <div className="flex items-center">
    <div
      className="flex-1 border rounded-md px-4 py-3 flex items-center justify-between cursor-pointer"
      onClick={() => onToggle(name)}
    >
      <div>{label}</div>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
        {checked && <Check size={16} className="text-white" />}
      </div>
    </div>
    <button className="ml-4 w-10 h-10 bg-indigo-400 rounded-md flex items-center justify-center text-white">
      <ChevronRight size={20} />
    </button>
  </div>
);

const Step2 = ({ formData, handleChange, handleAgreementToggle, errors }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-gray-400">Step 2</div>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Business Information</h2>
        <p className="text-gray-600 mb-8">Please, enter information about your company.</p>
      </div>
      
      <div className="uppercase text-sm font-medium text-blue-400 mb-2">General Information</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Brand Name" name="brandName" value={formData.brandName} onChange={handleChange} placeholder="Input Your Brand Name" error={errors.brandName} />
        
        <div className="relative" ref={tooltipRef}>
          <label className="block text-gray-600 mb-1">Brand Type<span className="text-red-500">*</span></label>
          <div className="relative flex items-center">
            <select
              name="brandType"
              value={formData.brandType}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.brandType ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Type of Brand</option>
              <option value="local">Local</option>
              <option value="national">National</option>
            </select>
            <button 
              type="button"
              onClick={() => setShowTooltip(!showTooltip)}
              className="ml-2 text-gray-400 focus:outline-none"
            >
              <HelpCircle size={16} />
            </button>
            {showTooltip && (
              <div className="absolute right-0 z-10 mt-2 w-64 bg-gray-700 text-white text-sm rounded-md shadow-lg p-4">
                <div className="font-medium">Dummy content here</div>
                <button onClick={() => setShowTooltip(false)} className="absolute top-1 right-1 text-white">
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
          {errors.brandType && <div className="text-red-500 text-sm mt-1">{errors.brandType}</div>}
        </div>
        
        <InputField label="Street Address" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="Input Your Street Address" error={errors.streetAddress} />
        <InputField label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Input City" error={errors.city} />
        <InputField label="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Input Zip Code" error={errors.zipCode} />
        <InputField label="Tax ID Number" name="taxIdNumber" value={formData.taxIdNumber} onChange={handleChange} placeholder="Input Tax ID Number" error={errors.taxIdNumber} />
      </div>
      
      <div className="mt-8">
        <div className="uppercase text-sm font-medium text-blue-400 mb-2">Documents</div>
        <p className="text-gray-600 mb-4">Once the following documents are signed, you'll be ready to get started</p>
        
        <AgreementItem label="Electronically sign the agreement(s)" name="electronicallySign" checked={formData.agreements.electronicallySign} onToggle={handleAgreementToggle} />
        <AgreementItem label="Non adult beverage Kroger market supplier waiver and release" name="nonAdultBeverage" checked={formData.agreements.nonAdultBeverage} onToggle={handleAgreementToggle} />
      </div>
      
      <div className="mt-8">
        <div className="uppercase text-sm font-medium text-blue-400 mb-2">COI PDF UPLOAD</div>
        <p className="text-gray-600 mb-4">Upload the COI document to proceed</p>
        <AgreementItem label="Upload COI PDF" name="coiPdfUpload" checked={formData.agreements.coiPdfUpload} onToggle={handleAgreementToggle} />
      </div>
    </div>
  );
};

export default Step2;
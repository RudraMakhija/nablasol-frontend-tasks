const InputField = ({ label, name, type, value, handleChange, error, placeholder }) => (

  <div className="mb-4 w-full">

    <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1 sm:mb-2">{label} <span className="text-red-500">*</span></label>

    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none transition-all ${
        error ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-indigo-300"
      }`}
    />
    
    {error && <div className="text-red-500 text-xs sm:text-sm mt-1">{error}</div>}
  </div>


);

export default InputField;
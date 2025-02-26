import InputField from "./InputField";

const inputFields = [
  { label: "First Name", name: "firstName", type: "text", placeholder: "Input Your First Name" },
  { label: "Last Name", name: "lastName", type: "text", placeholder: "Input Your Last Name" },
  { label: "Email", name: "email", type: "email", placeholder: "Input Your Email" },
  { label: "Phone Number", name: "phone", type: "tel", placeholder: "Input Your Phone Number" },
  { label: "Password", name: "password", type: "password", placeholder: "Create Password" },
  { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm Your Password" },
];

const Step1 = ({ formData, handleChange, errors }) => {

  return (

    <div className="w-full max-w-full space-y-6 px-4 sm:px-6">

      <div className="text-center">
        <div className="text-gray-400 text-sm sm:text-base">Step 1</div>
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-500 mb-2 sm:mb-4">Your Profile</h2>

        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-8 max-w-lg mx-auto">
          Enter the login information for your account. You will be able to create additional users after registering.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {inputFields.map(({ label, name, type, placeholder }) => (
          <div key={name} className={name === "email" || name === "phone" ? "col-span-1 md:col-span-2" : ""}>
            <InputField label={label} name={name} type={type} value={formData[name]} handleChange={handleChange} error={errors[name]} placeholder={placeholder}
            />
          </div>
        ))}
      </div>
    </div>

  );
};

export default Step1;
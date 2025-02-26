import { useState } from 'react';
import CloseButton from './CloseButton';

const Step6 = ({ formData, updateTeamMember, handleBack, handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredMembers = formData.team.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMember = (memberId) => {
    updateTeamMember(memberId, true);
    setDropdownOpen(false);
    setSearchTerm('');
  };

  const handleRemoveMember = (memberId) => {
    updateTeamMember(memberId, false);
  };

  return (
    <div className="space-y-8">

<div className="flex justify-end mb-6">
        <CloseButton />
      </div>

      <div className="mb-4">
        <label 
          htmlFor="addPerson" 
          className="block text-sm font-medium mb-2"
        >
          Invite or Add a person
        </label>
        <div className="flex space-x-2 relative">
          <div className="flex-1 relative">
            <div 
              className="flex items-center p-2 border rounded-md w-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setDropdownOpen(true);
                }}
                placeholder="Search team members"
                className="flex-1 outline-none"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {dropdownOpen && (
              <div className="absolute left-0 right-0 mt-1 border rounded-md bg-white shadow-lg z-10 max-h-40 overflow-y-auto">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <div 
                      key={member.id} 
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleSelectMember(member.id)}
                    >
                      {member.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => {
              if (searchTerm.trim() !== '') {
                updateTeamMember(searchTerm.trim(), true);
                setSearchTerm('');
                setDropdownOpen(false);
              }
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="border-t pt-4">
        {formData.team
          .filter(member => member.selected)
          .map((member) => (
            <div key={member.id} className="flex items-center justify-between p-2 border-b">
              <span>{member.name}</span>
              <button
                className="text-red-500 text-lg cursor-pointer"
                onClick={() => handleRemoveMember(member.id)}
              >
                ×
              </button>
            </div>
          ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button 
          className="text-blue-500 font-semibold cursor-pointer "
          onClick={handleBack}
        >
          ← Back
        </button>


        <button 
          type="button" 
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition cursor-pointer"
          onClick={handleSubmit}
        >
          Create Project
        </button>


      </div>
    </div>
  );
};

export default Step6;

import { useState } from 'react';
import CloseButton from './CloseButton';
import NavigationButtons from './NavigationButtons';

const Step5 = ({ formData, updateTaskStatus, handleNext, handleBack }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-6">
        <CloseButton />
      </div>
      
      <div className="mb-4">
        <label htmlFor="addTask" className="block text-sm font-medium mb-2">
          Add a task
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            id="addTask"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add task"
            className="flex-1 p-2 border rounded-md"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>


      
      
      <div className="overflow-y-auto max-h-64 space-y-2">
        {formData.tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-2 border-b">
            <label className="flex items-center flex-1">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={(e) => updateTaskStatus(task.id, e.target.checked)}
                className="mr-2"
              />
              <span>{task.name}</span>
            </label>
            <button
              type="button"
              className="text-gray-400"
              onClick={() => console.log('Remove task', task.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>



      
      <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </div>
  );
};

export default Step5;
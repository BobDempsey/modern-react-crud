import { useState } from "react";

// library imports
import { CheckIcon } from "@heroicons/react/24/solid";

function EditForm({ editedTask, updateTask }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  // submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
    setUpdatedTaskName("");
  };

  return (
    <div
      role="dialog"
      aria-labelledby="edit"
      // onClick={}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirmed edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
}

export default EditForm;

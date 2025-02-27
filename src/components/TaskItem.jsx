// props validation
import PropTypes from 'prop-types';
import { useState } from 'react';

// components
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

// icons
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

function TaskItem({ task, id, onToggle, onDelete, onEdit }) {
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState('');
  
  return (
    <div className="bg-gray-400 flex items-center justify-between gap-5 border border-gray-300/90 rounded-md p-3 w-[600px]">
      {/* checkbox container */}
      <Checkbox
        checked={task.completed}
        onClick={() => onToggle(id)}
        className={`rounded-full ${task.completed ? 'border-none' : ''}`}
      />

      {/* text Tasks */}
      {edit ? (
        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      ) : (
        <p
          className={`text-white text-left text-xl ${
            task.completed ? 'line-through text-white/40' : ''
          }`}
        >
          {task.text}
        </p>
      )}

      {/* button container */}
      <div className="flex items-center justify-center gap-3">
        <Button
          type="button"
          onClick={() => onDelete(id)}
          aria-label="Delete task"
          className="w-8 h-8"
        >
          <FaTrashAlt />
        </Button>

        <Button onClick={() => setEdit(true)} className="w-8 h-8">
          <FaEdit />
        </Button>

        <Button
          type="button"
          onClick={() => {
            onEdit({ id: task.id, newTask });
            setEdit(false);
          }}
          className="w-8 h-8"
        >
          <FaCheck />
        </Button>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default TaskItem;

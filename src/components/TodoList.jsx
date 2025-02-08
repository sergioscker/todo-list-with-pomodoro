// components
import TaskItem from './TaskItem';

import PropTypes from 'prop-types';

function TodoList({ tasks = [], onDelete, onToggle }) {
  return (
    <section
      className={`flex items-center justify-center max-w-xl border-gray-300 rounded-md p-5 mt-5 ${
        tasks.length > 0 ? 'border-none' : 'border-t'
      } `}
    >
      {/* tasks empty */}
      {tasks.length === 0 ? (
        <div className="flex gap-4 justify-center items-center py-[64px] px-6">
          <img src="/assets/clipboard.svg" alt="file-logo" />

          <p className="flex flex-col text-[16px] font-bold text-white/80">
            You do not have any registered tasks yet.
            <span className="text-[16px] font-medium text-white/80">
              Create tasks and organize your to-do items
            </span>
          </p>
        </div>
      ) : (
        // TasksList
        <ul className="flex flex-col gap-3 items-center justify-start w-full">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                task={task}
                id={task.id}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

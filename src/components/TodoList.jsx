// components
import PomodoroTimer from './PomodoroTimer';
import TodoListItem from './TaskItem';

function TodoList() {
  return (
    <div className="flex gap-5 justify-center w-full">
      <div
        className="bg-gray-400 rounded-lg shadow-lg p-6 w-full 
       max-w-4xl flex-col justify-between md:flex-row gap-6 mt-5"
      >
        <TodoListItem />
      </div>

      <div
        className="bg-gray-400 rounded-lg shadow-lg p-6 
       max-w-4xl flex-col justify-between md:flex-row gap-6 mt-5"
      >
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default TodoList;

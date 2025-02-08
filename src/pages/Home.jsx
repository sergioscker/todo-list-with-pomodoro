// components
import PomodoroTimer from '@/components/PomodoroTimer';
import TodoList from '@/components/TodoList';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// icons
import { GrAddCircle } from 'react-icons/gr';

// hooks
import { useTasks } from '@/hooks/useTasks';
import { useState } from 'react';

function HomePage() {
  const { tasks, addTasks, completedTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleAddTasks = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    addTasks(newTask);
    setNewTask('');
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-500 p-6">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl text-white/90 font-bold text-center p-6">
      <img src="" alt="logo-gaming" />
        {tasks.length === 0 ? (
          <strong>
            to<span className="text-bluedark">do</span>
          </strong>
        ) : (
          'Task Listing'
        )}
      </h1>

      {/* Form */}
      <form
        onSubmit={handleAddTasks}
        className="flex flex-col md:flex-row gap-4 w-full max-w-2xl"
      >
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 rounded"
        />
        <Button type="submit" className="flex items-center gap-2">
          Create <GrAddCircle className="w-4 h-4" />
        </Button>
      </form>

      {/* Labels */}
      <div className="w-full max-w-2xl py-5">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2 text-bluedark text-sm font-bold">
            Tasks created
            <span className="flex items-center justify-center bg-gray400 text-white text-xs rounded-full w-6 h-6">
              {tasks.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-purple text-sm font-bold">
            Completed
            <span className="flex items-center justify-center bg-gray400 text-white text-xs rounded-full w-auto px-3 h-6">
              {tasks.filter((task) => task.completed).length} of {tasks.length}
            </span>
          </div>
        </div>
      </div>

      {/* Pomodoro Timer */}
      <PomodoroTimer />

      {/* Task List */}
      <TodoList tasks={tasks} onDelete={deleteTask} onToggle={completedTask} />
    </main>
  );
}

export default HomePage;

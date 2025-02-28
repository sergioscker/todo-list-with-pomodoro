// validation
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import PomodoroTimer from '@/components/PomodoroTimer';
import TodoList from '@/components/TodoList';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// icons
import { GrAddCircle } from 'react-icons/gr';

// hooks
import { useTasks } from '@/hooks/useTasks';

function HomePage() {
  const { tasks, addTasks, completedTask, deleteTask, editTasks } = useTasks();

  const handleAddTasks = (data) => {
    if (!data.text.trim()) return;

    addTasks(data.text);
    reset();
  };

  // validation schema
  const schema = yup.object({
    text: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-500 p-6">
      {/* Header */}
      <div className="flex items-center justify-center w-full mb-6">
        {/* title */}
        <h1 className="text-4xl md:text-6xl text-white/90 font-bold text-center p-6">
          {tasks.length === 0 ? (
            <strong>
              to<span className="text-bluedark">do</span>
            </strong>
          ) : (
            'Task Listing'
          )}
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(handleAddTasks)}
        className="flex flex-col md:flex-row gap-4 w-full max-w-3xl"
      >
        <div className="w-full">
          <Input
            type="text"
            placeholder="Add a new task"
            className="flex-1 p-2"
            {...register('text')}
          />
          {errors.text && (
            <p className="text-red-500 text-md mt-1">{errors?.text?.message}</p>
          )}
        </div>

        <Button type="submit" className="flex items-center gap-2">
          Create <GrAddCircle className="w-4 h-4" />
        </Button>
      </form>

      {/* Labels */}
      <div className="w-full max-w-3xl py-5">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2 text-bluedark text-sm font-bold">
            Tasks created
            <span className="flex items-center justify-center bg-gray-400 text-white text-xs rounded-full w-6 h-6">
              {tasks.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-purple text-sm font-bold">
            Completed
            <span className="flex items-center justify-center bg-gray-400 text-white text-xs rounded-full w-auto px-3 h-6">
              {tasks.filter((task) => task.completed).length} of {tasks.length}
            </span>
          </div>
        </div>
      </div>

      {/* Pomodoro Timer */}
      <PomodoroTimer />

      {/* Task List */}
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={completedTask}
        onEdit={editTasks}
      />
    </main>
  );
}

export default HomePage;

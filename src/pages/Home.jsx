// components
import PomodoroTimer from '@/components/PomodoroTimer';
import TodoListItem from '@/components/TaskItem';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// icons
import { GrAddCircle } from 'react-icons/gr';

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-500 flex flex-col items-center justify-center">
      {/* header */}
      <div className="p-2 mb-10">
        <h1 className="text-6xl text-bluedark font-bold text-center ">
          Task Listing
        </h1>
      </div>

      {/* form */}
      <div>
        <form className="flex gap-3">
          {/* input */}
          <Input
            type="text"
            placeholder="Add a new task"
            className="w-full p-2 rounded"
          />

          {/* button create */}
          <Button type="submit">
            Create <GrAddCircle className="w-4 h-4" />
          </Button>
        </form>
      </div>

      {/* pomodoro */}
      <div
        className="bg-gray-400 rounded-lg shadow-lg p-3 
          max-w-xl flex-col items-center md:flex-row mt-5"
      >
        <PomodoroTimer />
      </div>

      {/* task list */}
      <div
        className="bg-gray-400 rounded-lg shadow-lg p-6 w-full 
          max-w-4xl flex-col justify-between md:flex-row gap-6 mt-5"
      >
        <TodoListItem />
      </div>
    </main>
  );
}

export default HomePage;

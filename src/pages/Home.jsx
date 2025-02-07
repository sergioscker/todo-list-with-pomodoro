// components
import TodoList from '../components/TodoList';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// icons
import { GrAddCircle } from 'react-icons/gr';

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-500  flex flex-col items-center justify-center">
      {/* header */}
      <header className="p-5 mb-10">
        <h1 className="text-6xl text-bluedark font-bold text-center ">
          Task Listing
        </h1>
      </header>

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

      <div>
        <TodoList />
      </div>
    </main>
  );
}

export default HomePage;
